from asyncio.windows_events import NULL
from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from .models import categories, qa
import json
# Create your views here.
def index(request):
    return render(request, "Jeopardy/index.html")

def game(request):
    return render(request, "Jeopardy/game.html")
def gameAdminView(request):
    return NULL
def gameUserView(request):
    return NULL
def retrieveGameData(request):
    questionanswers = []
    qaList = []
    categoryqaList =[]
    gameDataSet = {}
    categoriesList = categories.objects.order_by('categoryName')
    for category in categoriesList:
        categoryID = category.categoryID
        categoryName = category.categoryName
        qaItems = qa.objects.filter(categoryID=categoryID).all()
        
        for qaItem in qaItems:            
            #data = {"Question": qaItem.question, "Answer": qaItem.answer, "Value":qaItem.question_value, "ID":qaItem.qaID}
            #questionanswerRecords[qaItem.qaID] = {"Question": qaItem.question, "Answer": qaItem.answer, "Value":qaItem.question_value, "ID":qaItem.qaID}
            qaRecord  ={"Question": qaItem.question, "Answer": qaItem.answer, "Value":qaItem.question_value, "ID":qaItem.qaID}
            qaList.append(qaRecord)
        
        categoryqaRecord = {"category": categoryName, "QuestionAnswer": qaList}    
        
        #gameDataRecords[categoryID] = categoryqaRecord
        #questionanswerRecords = {}
        categoryqaList.append(categoryqaRecord)
        qaList = []
    gameDataSet["DataSet"] = categoryqaList
    return JsonResponse(gameDataSet)
        #gameData[category.categoryName] 
# create a new view for the game.html page.
# create a new method to retrieve the category data.

# Create your views here.
