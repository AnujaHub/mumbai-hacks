from django.db import models
from django.contrib.auth.models import User


class ngo_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ngo_name = models.CharField(max_length=255)
    reg_no = models.CharField(max_length=255)
    address = models.TextField()
    ngo_pic = models.ImageField(upload_to="media/ngo")
    is_ngo = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.ngo_name} ({self.user.username})"



class vol_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=15)
    is_vol = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.fullname} ({self.user.username})"



class gov_info(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gov_dept = models.CharField(max_length=255)
    gov_desg = models.CharField(max_length=255)
    is_gov = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.gov_dept} -({self.user.username})"


class img_post(models.Model):
    img = models.ImageField(upload_to="media/images")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time = models.TimeField(auto_now_add=True)
    location = models.TextField()

    def __str__(self):
        return f"{self.user.username} - post"


class verified_post(models.Model):
     img = models.ImageField(upload_to="media/images")
     user = models.ForeignKey(User, on_delete=models.CASCADE)
     time = models.TimeField(auto_now_add=True)
     location = models.TextField()
     verified_img=models.ForeignKey(img_post,on_delete=models.CASCADE,null=True,blank=True)
     status=models.CharField(max_length=40,default="Pending")
     def __str__(self):
        return f"{self.user.username} - post"


