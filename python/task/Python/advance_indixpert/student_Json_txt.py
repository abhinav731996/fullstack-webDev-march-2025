import datetime
import json

def creatlogs(listData):
    with open("studentregis.txt","a") as file:
            for n in listData:
                file.write(f"Name:{n["Name"]}, Date:{n["CreatedDate"]}\n")

def studentRegistration(listData):
    
    choice = int(input("How many student you want to add: "))
    for i in range(choice):
        dicData = {}
        dicData["Id"] = int(input("Enter your ID: "))
        dicData["Name"] = input("Enter your name: ")
        dicData["CreatedDate"] = str(datetime.datetime.now().date())

        listData.append(dicData)

        with open("studentregis.json","w") as file:
            file.write(json.dumps(listData,indent=4))

        creatlogs(listData)

def readExistingData():
    with open("studentregis.json", "r") as file:
        data = file.read()
        return data
    
def startRegistration():
    output = json.loads(readExistingData())
    studentRegistration(output)



def menu():

    while True:
        print("1 for student registration: ")
        print("2 for display student record: ")
        print("3 for exit: ")

        option = int(input("Enter your option: "))

        if option == 1:
            startRegistration()

        elif option == 2:
            print(readExistingData())

        elif option == 3:
            break
        
        else:
            print("\nPlease select a valid option!!\n")


menu()



