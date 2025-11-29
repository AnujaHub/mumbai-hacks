from dotenv import load_dotenv
import os

load_dotenv()
api_key=os.getenv("GOOGLE_API_KEY")
os.environ["GOOGLE_API_KEY"]=api_key
from django.shortcuts import render,redirect 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from .models import ngo_info,vol_info,gov_info,img_post,verified_post
import numpy as np
from ultralytics import YOLO
import cv2

from google.adk.agents import Agent,SequentialAgent
from google.adk.runners import InMemoryRunner
from google.adk.tools import AgentTool,FunctionTool
from google.genai import types
import asyncio

# Create your views here.
Thinking_agent=Agent(
    name="Thinking_agent",
    model="gemini-2.5-flash",
    instruction="""
you have received a severity score, and severity level from a picture which contains waste,
based on score you have to answer to this 3 questions and classify the situation as Low , moderate and Severe
questions :
1.Is this a small local issue?
2.Is it dangerous for health?
3.Is it near water,school or public area?
""",
output_key="result"
)

Decision_agent=Agent(
    name="Decision_agent",
    model="gemini-2.5-flash",
    instruction="""You receive severity level as {result}.strictly adhere to this. 
    Based on that, decide who must be alerted and how urgent the case is.
    the users are Government authority,local Volunteers, and NGOs who work in this sector
    choose only one user based on the input given
    STRICTLY follow this output format. DO NOT add extra text.

Output ONLY valid JSON:

{
  "authority": ["gov", "ngo", "volunteer"],
  "severity": "Low | Moderate | Severe"
}

Notes:
- authority list must contain ONLY these exact keywords: "gov", "ngo", "volunteer"
- Convert roles:
    - Government authority → "gov"
    - NGOs → "ngo"
    - Local Volunteers → "volunteer"
    reporting Authority :
    severity : 


    """,
    output_key="decision_risk"
)


verification_agent=Agent(
    name="verification_agent",
    model="gemini-2.5-flash",
    instruction="""
You will receive:
- previous waste percentage
{prev_waste}
- current waste percentage
{current_waste}

Decide whether cleanup was successful.

Rules:
- If waste reduced by > 80% = Verified Clean
- If reduced by 40–80% = Partially Clean
- If reduced < 40% = Not Clean
- If time > 48 hours = Escalate
Output ONLY one word:


  "status": "verified or partial or failed or escalated",
 

""",
    output_key="verification_result"
)

root_agent=SequentialAgent(
        name="root_agent",
        sub_agents=[Thinking_agent,Decision_agent],
        )


runner=InMemoryRunner(agent=root_agent)
def analyze_img(img_path):
    model=YOLO("yolov8s.pt")
    img= cv2.imread(img_path)
    results=model(img)
    total_area=img.shape[0]*img.shape[1]
    waste_area=0

    for b in results[0].boxes:
        x1,y1,x2,y2=b.xyxy[0]
        waste_area += (x2-x1)*(y2-y1)
    
    percentage=(waste_area/total_area)*100
    return percentage

async def verify_cl(og_post,ver_post):
    before=analyze_img(og_post.img.path)
    after=analyze_img(ver_post.img.path)


    runner = InMemoryRunner(agent=verification_agent)
    response=await runner.run_debug([
         f"previous waste={before}, current waste={after}"
    ])
    
    result = None
    for event in response:
        if hasattr(event, "author") and event.author == "Verification_agent":
            if event.actions and event.actions.state_delta:
                result = event.actions.state_delta.get("verification_result")

    return result

async def check(severity_score,level): 
            response= await runner.run_debug([
            f"Severity score is {severity_score}. Severity level is {level} Classify the situation."
             ])
            decision_output=None
            for event in response:
                 if hasattr(event, "author") and event.author == "Decision_agent":
                       if event.actions and event.actions.state_delta:
                             decision_output = event.actions.state_delta.get("decision_risk")
    
            return decision_output



def assign_post(decision_output,current_post):
     desg=decision_output.get("authority",[])
     target_users=[]
     current_user=current_post.user
     if "volunteer" in desg:
         target_users += list(vol_info.objects.filter(user=current_user))
         
         #i will send photo to that filtered out user based on location and 
     elif "government" in desg:
         target_users += list(gov_info.objects.filter(user=current_user))
     else:
         target_users += list(vol_info.objects.filter(user=current_user))
     
     return target_users,current_post


def home(request):
    return render(request,"home.html",{})


def reg_user(request):
    if request.method == "POST":
        username=request.POST.get("username")
        email=request.POST.get("email")
        password=request.POST.get("password")
        desg=request.POST.get("desg")
        current_user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        # current_user.save()
        print("saved")
        user =authenticate(request,username=username,password=password)
        login(request,user)
        if desg=="ngo":
            return redirect("ngo_reg")
        elif desg=="gov":
            return redirect('gov_reg') #later redirect to extra info page
        else:
            return redirect('vol_reg')
    else:
        return render(request,"register.html",{})

def ngo_reg(request):
    if request.method=="POST":
        user = request.user
        ngo_name=request.POST.get("ngo_name")
        reg_no=request.POST.get("reg_no")
        address=request.POST.get("address")
        ngo_pic=request.FILES.get('ngo_pic')
        is_ngo=True
        current_ngo=ngo_info(User=user,ngo_name=ngo_name,reg_no=reg_no,address=address,ngo_pic=ngo_pic,is_ngo=is_ngo)
        current_ngo.save()
        return redirect('home')
    else:
        return render(request,'ngo_reg.html')



def gov_reg(request):
    if request.method=="POST":
       user=request.User
       gov_dept=request.POST.get("gov_dept")
       gov_desg=request.POST.get("gov_desg")
       is_gov=True
       current_gov=gov_info(user=user,gov_dept=gov_dept,gov_desg=gov_desg,is_gov=is_gov)
       current_gov.save()
       return redirect('home')
    else:
        return render(request,'gov_reg.html')
        

def vol_reg(request):
    if request.method=="POST":
        user=request.user
        fullname= request.POST.get('fullname')
        is_vol=True
        phone_no = request.POST.get('phone_no')
        current_vol=vol_info(user=user,fullname=fullname,is_vol=is_vol,phone_no=phone_no)
        current_vol.save()
        return redirect('home')
    else:
        return render(request,'vol_reg.html')



def login_user(request):
    if request.method == "POST":
        username=request.POST.get("username")
        password=request.POST.get("password")
        user=authenticate(request,username=username,password=password)
        login(request,user)
        return redirect("home")
    else:
        return render(request,"login_user.html",{})

def logout_user(request):
    logout(request)
    return redirect("home")

def assign_image(request):
    if request.method=="POST":
        user=request.user
        imgpost = request.FILES.get('img')
        address=request.POST.get("address")

        current_post=img_post(img=imgpost,user=user,location=address)
        current_post.save()
        
        model=YOLO("yolov8s.pt")

       
        image=cv2.imread(current_post.img.path)
        results = model(image)



        for b in results[0].boxes:
            cl = int(b.cls[0])
            label=results[0].names[cl]
            conf = float(b.conf[0])
            print(f"{label}-{conf:.2f}")

            num_items = len(results[0].boxes)
            total_waste_area = 0

        for box in results[0].boxes:
               x1, y1, x2, y2 = box.xyxy[0]
               w = x2 - x1
               h = y2 - y1
               area = w * h
               total_waste_area += area

        h_img, w_img, _ = image.shape
        image_area = w_img * h_img
        waste_coverage = (total_waste_area / image_area) * 100

        severity_score = (waste_coverage * 0.7) + (num_items * 2)
        if severity_score < 25:
             level = "Low"
        elif severity_score < 60:
            level = "Moderate"
        else:
            level = "Severe"

        print(level)
        
        decision_output= asyncio.run(check(severity_score,level))
        
        c_user,c_post=assign_post(decision_output,current_post)

        
        return redirect(request,'see_profile.html',{c_user:'c_user','c_post':c_post})
    else:
        return render(request,"img_post.html",{})
    

def post_verified_image(request,pid):
    if request.method=="POST":
        updated_img=request.FILES.get('upd_img')
        location=request.POST.get("loc")
        current_post = img_post.objects.filter(id=pid)

        res=asyncio.eun(verify_cl(current_post.img,updated_img))
        updated_post=verified_post(user=request.user,img=updated_img,verified_img=current_post,location=location,status=res)
        return render(request, "verification_result.html", {
            "result": res,
            "post":updated_post
        })
    else:
        return render(request,"verification_result.html",{})

def show_profile(request):
    if request.user.is_gov:
        gov_prof=gov_info.objects.filter(user=request.user)
        return render(request,"show_profile.html",{"gov_prof":gov_prof})
    elif request.user.is_ngo:
        ngo_prof=ngo_info.objects.filter(user=request.user)
        return render(request,"show_profile.html",{"ngo_prof":ngo_prof})
    else:
        vol_prof=vol_info.objects.filter(user=request.user)
        return render(request,"show_profile.html",{'vol_prof':vol_prof})
                       

    


         


    
    