# import uuid


# class Student:
#     def registration(self):
#         self.id = uuid.uuid4().hex[:4]
#         self.name = "Abhinav"
#         self.pincode = uuid.uuid4().hex[:6]
#         self.address = "Rohtak"



# class View:
#         def Display(self,student):
#             print("ID: ",student.id)
#             print("Name: ",student.name)
#             print("Address: ", student.address)
#             print("Pincode: ", student.pincode)

# ob1 = Student()
# ob1.registration()

# ob2 = View()
# ob2.Display(ob1)


# ********************************************************

import uuid

class StudentModule:
    def __init__(self):
        self.id = str
        self.name = str
        self.address = str
        self.pincode = str

class Main:
    def getStudent(self):
        regis = StudentModule()
        regis.id = uuid.uuid4().hex[:4]
        regis.name = input("Enter Name: ")
        regis.address = input("Enter Address: ")
        regis.pincode = input("Enter Pincoe: ")

        return regis
    
    def dataPrint(self,data):
        print("-"*50)
        print("Student data will be")
        print("Student ID: ", data.id)
        print("Student Name: ", data.name)
        print("Student Address: ", data.address)
        print("Student Pincode: ", data.pincode)

ob = Main()
output = ob.getStudent()
ob.dataPrint(output)