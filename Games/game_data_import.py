import sqlite3
import json
import time
import threading

# Read json file.
with open('data.json','r') as jsonFile:
     data=jsonFile.read()

#print(data)

jsonData = json.loads(data)

#print(len(jsonData))

# Create the connect to the database
cn = sqlite3.connect('/Users/brandonhunter/Development/GitHub/UMASAV/Games/PythonGames/db.sqlite3')

# Create a cursor object
cr = cn.cursor()
# cn.close()
cr.execute('Delete from Jeopardy_categories')
cr.execute('DELETE FROM Jeopardy_qa')
cn.commit()
# Loop through all the entire game data items
for a in jsonData:
    # get the category name and insert into the Jeopardy_categories table.
    category = a['category']
    print('Inserting {} category'.format(category))
    insertCategoryStmt = "INSERT INTO Jeopardy_categories (categoryName) VALUES ('{}')".format(category)
    cr.execute(insertCategoryStmt)
    cn.commit()
    print('Insert of {} category wa sucessful'.format(category))
    print('Retrieving {} category id from database'.format(category))
    # Retrieve the id of the new record.
    selectNewCategoryStmt = "select categoryID from Jeopardy_categories WHERE categoryName ='{}'".format(category)
    cr.execute(selectNewCategoryStmt)
    categoryID = cr.fetchone()[0]
    cn.commit()
    print('Retrieval of {} category id from database was sucessful. CategoryID: {}'.format(category, categoryID))
    print('Inserting {} categorys question and answer data'.format(category))
    for  b in a['QuestionAnswer']:
         print('----------------------------------------------------------------------------------------------')
         question = b['Question']
         answer = b['Answer']
         answerValue = b['Value']
         insertQAstmt = "insert into Jeopardy_qa (question, answer, categoryID_id, question_value) VALUES ('{}', '{}',{}, {})".format(question, answer, categoryID, answerValue)
         print(insertQAstmt)
         
         cr.execute(insertQAstmt)
         cn.commit()
         print('Insert was sucessful of {} categorys question and answer data.'.format(category))
         print('----------------------------------------------------------------------------------------------')
    print('')     
    print('*****************************************************************************************************')

