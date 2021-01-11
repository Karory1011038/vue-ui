from django.conf.urls import url
from django.urls import path, include, re_path
from . import views
from .views import index_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + [
    path('send/', views.send_messange, name='send_messange'),
    url(r'^.*$', index_view, name='index'),
]
