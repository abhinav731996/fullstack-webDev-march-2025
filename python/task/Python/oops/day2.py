import uuid
import json

class Student:

    def __init__(Abhinav):
        pass

    def StudentRegistration(self):
        dict = {}

        dict["id"] = uuid.uuid4().hex[:6]
        dict["name"] = input("enter your name: ")

        self.studentData = dict

    def ViewStudent(self):
        print(json.dumps(self.studentData, indent=4))


studentObject = Student()
studentObject.ViewStudent()