import uuid
import json

class student:

    def __init__(self):
        self.dict = {}

        self.dict["id"] = uuid.uuid4().hex[:6]
        self.dict["name"] = input("enter your name: ")

    def display(self):
        print("*"*50)
        print("You entered:-")
        print("student ID: ",self.dict["id"])
        print("student Name: ",self.dict["name"])
        print("*"*50)
        print(json.dumps(self.dict, indent=4))

    def writeFile(self):
        with open("/Users/abcd/Desktop/newFile/student.txt", "a") as file:
            file.write(json.dumps(self.dict, indent=4))

data = student()
data.display()
data.writeFile()


