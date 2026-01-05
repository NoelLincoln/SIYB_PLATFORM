from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth.models import User


@api_view(['GET'])
@permission_classes([AllowAny])
def welcome(request):
    """Welcome endpoint for SIYB platform"""
    return Response({
        'message': 'Welcome to SIYB Platform!',
        'description': 'Start and Improve Your Business training platform',
        'modules': {
            'GYB': 'Generate Your Business Idea',
            'SYB': 'Start Your Business', 
            'IYB': 'Improve Your Business',
            'EYB': 'Expand Your Business',
            'SIYB_Game': 'Business Simulation Game'
        },
        'status': 'Development'
    })


@api_view(['GET'])
@permission_classes([AllowAny])
def user_count(request):
    """Get total user count"""
    count = User.objects.count()
    return Response({
        'total_users': count,
        'message': f'Total registered users: {count}'
    })
