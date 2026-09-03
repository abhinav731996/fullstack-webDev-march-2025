class Student:
    
    def __init__(self):
        self.id = 101
        self.name = "Abhinav"

    def StudentRegistration(self):
        print("this is page", self.id)

    def StudentSearch(self):
        print("this is page", self.id)

    def Studentupdate(self):
        print("this is page", self.id)
        
    def StudentDelete(self):
        print("this is page", self.id)
    
student = Student()
print(student.id)
print(student.name)

student.StudentRegistration()