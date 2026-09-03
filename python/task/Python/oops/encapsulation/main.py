

# def userinput():

#     a = 10
#     b = 20
#     print("sum:", a+b)


class student:
    
    def __init__(self):
        self.__id = 101             #private variable 
        self._name = "abhinav"
        self.age = 26

    # def getid(self):
    #     return self.__id
    
    # def getname(self):
    #     return self._name

    def displayData(self):
        print("studentId: ", self.__id)
        print("studentName: ", self._name)
        print("studentAge: ", self.age)


ob1 = student()
ob1.__id = 201
ob1._name = "Batch_2025"
ob1.age = 20
print(ob1.__id)
print(ob1._name)
print(ob1.age)

ob1.displayData()