from django.contrib import admin

# Register your models here.
from .models import Pitch

class PitchModelAdmin(admin.ModelAdmin):
	list_display = ["user", "id", "title", "likes", "dislikes"]
	list_display_links = ["user"]

	search_fields = ["user", "title"]
	class Meta:
		model = Pitch

admin.site.register(Pitch, PitchModelAdmin)
