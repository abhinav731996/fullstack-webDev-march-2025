import json

def studentRegistration(listdata):
    
    for n in range(2):
        dicdata = {}

        dicdata["id"] = input("Enter ID: ")
        dicdata["name"] = input("Enter Name: ")
        listdata.append(dicdata)
            
    with open("studentrecord.json","w") as file:
        file.write(json.dumps(listdata,indent=4))

def readExistingData():
    with open("studentrecord.json", "r") as file:
        data = file.read()
        return data
    
def startRegistration():
    output = json.loads(readExistingData())
    studentRegistration(output)


def menu():
    print("1 for registration: ")
    print("2 for records: ")
    print("3 for exit: ")

    option = int(input("enter your choice: "))

    if option == 1:

        startRegistration()

    elif option ==2:

        print(readExistingData())
    elif option == 3:
          print("Thanks for using our services")
    else:
          
          print("You have entered a wrong choice please try again")   


menu()

