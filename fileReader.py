import csv 
import xml.etree.ElementTree as ET
import json


# csv file name 
input_filename = "input.csv"
output_filename = "output.json"


  
# initializing the titles and rows list 
fields = [] 
rows = [] 

# tree = ET.parse('strings.xml')
# root = tree.getroot()

res = []

# reading csv file 
with open(input_filename,'r') as csvinput:
    for row in csv.reader(csvinput):
        obj = {"intent":"","trainingPhrase":[], "answerPhrase":[]}
        obj["intent"] = row[0]
        obj["trainingPhrase"] = row[1].split(':')
        obj["answerPhrase"] = row[2].split(':')
        res.append(obj)
print(res)

with open('output.json', 'w') as f:
    json.dump(res, f)