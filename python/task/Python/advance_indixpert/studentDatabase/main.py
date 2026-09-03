class StudentModel:

    def __init__(self):
        self.id = str
        self.name = str
        self.address = str

class Student:
    
    def studentRegis(self):
        
        ob = StudentModel()
        ob.id = 101
        ob.name = "Abhinav"
        ob.address = "Rohtak"
        return ob
    
output = Student()

response = output.studentRegis()
print("studentName: ", response.name)