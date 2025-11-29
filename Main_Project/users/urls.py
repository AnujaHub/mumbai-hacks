"""
URL configuration for Main_Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
   path("home/",views.home,name="home"),
   path("reg_user/",views.reg_user,name="reg_user"),
   path("login_user/",views.login_user,name="login_user"),
   path("ngo_reg/",views.ngo_reg,name="ngo_reg"),
   path("gov_reg/",views.gov_reg,name="gov_reg"),
   path("vol_reg/",views.vol_reg,name="vol_reg"),
   path("logout_user/",views.logout_user,name="logout_user"),
   path("assign_image/",views.assign_image,name="assign_image"),
   path("post_verified_image/<int:pid>/",views.post_verified_image,name="post_verified_image"),
   path("show_profile/",views.show_profile,name="show_profile")
]
