from django.conf.urls import url
from django.contrib import admin

from .views import (
    PitchListAPIView,
    PitchDetailAPIView,
	)

urlpatterns = [
	url(r'^$', PitchListAPIView.as_view(), name='list'),
    # url(r'^create/$', LeadGenCreateAPIView.as_view(), name='create'),
    url(r'^(?P<unique_id>\w+)/$', PitchDetailAPIView.as_view(), name='detail'),
    # url(r'^(?P<random_videogate_id>\w+)/edit/$', LeadGenUpdateAPIView.as_view(), name='update'),
    # url(r'^(?P<random_videogate_id>\w+)/delete/$', LeadGenDeleteAPIView.as_view(), name='delete'),
]
