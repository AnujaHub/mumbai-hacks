from django.contrib import admin
from .models import ngo_info,vol_info,gov_info,img_post
# Register your models here.
admin.site.register(ngo_info)
admin.site.register(vol_info)
admin.site.register(gov_info)
admin.site.register(img_post)
