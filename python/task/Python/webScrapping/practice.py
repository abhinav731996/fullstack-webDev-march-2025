# data = {"one", "two", "two", "one", 1,2,2,1}        # Dictionary (order, allow dublicats)
# data = ("one", "two", "two", "one", 1,2,2,1)        # tuples (unorder, not allow dublicats)
# data = ["one", "two", "two", "one", 1,2,2,1]        # List (order, allow dublicats)
# data = set(data)
# print(data)
# print(set(data))

# num = [1,3,5,2,7,6]
# num.sort(reverse=False)
# print(num)

# for a in num:
#     print(a)

# for b in data:
#     print(b)

# for n in range(0,11):
#     print(n)

#********** for finding number **********
# num = [1,3,5,2,7,6]

# fndNum = int(input("Enter number: "))
# for n in num:
#     if fndNum in num:
#         print("exists!!")
#         break
#     else:
#         print("Not exists!!")
#         break

# *********** finding data from dictionary *************

# dicData = {
#     "id" : 101,
#     "name" : "Abhinav"
# }

# for key,value in dicData.items():
#     print(key, "=", value)

# *********** finding data from list dictionary ************

# dicData = [{
#     "id" : 101,
#     "name" : "Abhhinav"
# },
# {
#     "id" :102,
#     "name":"Kailash"
# }]
# user = int(input("Enter id: "))
# for listData in dicData:
#     for key, value in listData.items():
#         # print(key, "=", value)
#         if value == user:
#             print(listData)


# ************ import function ***************

# import os

# data = os.getcwd()
# print("cwd = ",data)

# file = os.listdir(data)
# print("file isn cwd",file)

# os.mkdir("test-dir")
# os.rmdir("test-dir")


# *************  file handling ***************

# import json 

# path = r"/Users/abcd/Desktop/practice/sample.txt"

# def writefile():
#     listData = []
#     dicdata = {}
#     dicdata["id"] = int(input("enter id: "))
#     dicdata["name"] = input("enter name: ")

#     listData.append(dicdata)

#     with open(path,"a") as file:
#         file.write(json.dumps(listData, indent=4))

#     print("success!")
    
#     return

# def readfile(data):
#     with open(path,"r") as file:
#         content = file.read(data)
#         print(content)


# while True:
#     print("1 for write")
#     print("2 for read")
#     print("3 for exit")

#     option = int(input("select any option: "))

#     if option == 1:
#         data = writefile()
        
#     elif option == 2:
#         readfile(data)
#     elif option == 3:
#         break
#     else:
#         print("please select from menu!!")


# ***************** requests library *******************

# import requests
# import json

# url = "https://api.sampleapis.com/coffee/hot"

# response = requests.get(url)

# lisdata = []

# for i in response.json():
#     if i["title"] and i["title"].lower() == "mocha":
#         lisdata.append(i)

# print(json.dumps(lisdata, indent=4))

# if lisdata:
#     for a in lisdata():
#         print(f"{a["title"]}-{a["web_page"][0]}")





import requests
import json
import bs4


url = "https://api.sampleapis.com/coffee/hot"

response = requests.get(url)

# soup = bs4.BeautifulSoup(response.text,"html parse")

# print(soup.prettify())

lisdata = []

for i in response.json():
    for j in i.items():
        if "Espresso" and "Expresso" not in i["ingredients"][0]:
    
            lisdata.append(j)

print(json.dumps(lisdata, indent=4))
