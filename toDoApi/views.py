from django.shortcuts import render

##this is for rest framework
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


from .models import Todo
from .serializers import *

# Create your views here.

def home(request):
    return render(request,'toDoApi/home.html')


@api_view(['GET', 'POST'])
def todo_list(request):
    if request.method == 'GET':
        data = Todo.objects.all()
        serializer = ToDoSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ToDoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    




@api_view(['GET', 'PUT', 'DELETE'])
def todo_detail(request, pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ToDoSerializer(todo, context={'request': request})
        return Response(serializer.data)


    elif request.method == 'PUT':
        serializer = ToDoSerializer(instance=Todo, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

        
        
        
        
            
        
        