from random import random

from django.http import FileResponse
import vk_api
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from rest_framework.response import Response


index_view = never_cache(TemplateView.as_view(template_name='index.html'))


@api_view(['POST'])
def send_messange(request):
    vk_session = vk_api.VkApi(
        token='03237ce080188072b73d3e2ff8624f6b930d57fa0ddc168797b955218f33a6aef7bea311eb6b7558e40e0')

    name = request.data.get('name')
    price = request.data.get('price')
    phone = request.data.get('phone')
    more_info = request.data.get('check')


    vk = vk_session.get_api()
    vk.messages.send(
        domain='gooutpls',
        message=f'Имя {name} \n Цена {price} \n Телефон {phone} \n Описание {more_info}',
        random_id=random()
    )

    return Response()
