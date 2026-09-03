# from abc import ABC, abstractmethod

# # Abstract class
# class Vehicle(ABC):

#     @abstractmethod
#     def start(self):
#         pass

#     @abstractmethod
#     def stop(self):
#         pass

# # Child class 1
# class Car(Vehicle):
#     def start(self):
#         print("Car started")

#     def stop(self):
#         print("Car stopped")

# # Child class 2
# class Bike(Vehicle):
#     def start(self):
#         print("Bike started")

#     def stop(self):
#         print("Bike stopped")

# # Usage
# c = Car()
# c.start()
# c.stop()

# b = Bike()
# b.start()
# b.stop()



# *********************************************


# from abc import ABC,abstractmethod

# class Student(ABC):
#     @abstractmethod
#     def registration(self):
#         pass

#     @abstractmethod
#     def search(self):
#         print("this is not abstraction method")

#     def updateStudent(self):
#         print("this is update student data")

# class fresher(Student):

#     def registration(self):
#         print("this is regis")

#     def name(self):
#         print("this is name function ")

#     def search(self):
#         pass

# ob = fresher()
# ob.name()
# ob.search()
# ob.registration()

# *********************************************

# from abc import ABC, abstractmethod


# class Shape(ABC):

#     @abstractmethod
#     def area(self,l,b):
#         pass

    
# class Rectangle(Shape):

#     def area(self, l, b):
#         print("area = ",l*b)


# ob = Rectangle()
# ob.area(2,4)



# *********************************************

# class Student:
#     name = "Indixpert"

#     def __init__(self):
#         self.id = 101
#         self.name = "Abhinav"

#     @classmethod
#     def getDetail(cls):
#         print(cls.name)
#         cls.name = "Gurgaon"

#     def getDetail2(self):
#         print(self.name)
#         # self.name = "Gurgaon"
#     @staticmethod
#     def getDetail3():
#         print("staticmethod")

# o = Student()
# # print(o.name)

# o.getDetail()
# o.getDetail()
# o.getDetail2()
# o.getDetail3()



# *********************************************

from abc import ABC, abstractmethod

class Animal(ABC):

    @abstractmethod
    def speak(self,spk):
        print("Speak = ", spk)

    @abstractmethod
    def leg(self, lg):
        print(f"it has {lg} legs")


class Dog(Animal):
    def speak(self, spk):
        print("Dog")
        return super().speak(spk)
    
    def leg(self, lg):
        return super().leg(lg)

class Cat(Animal):
    def speak(self, spk):
        print("-"*50)
        print("Cat")
        return super().speak(spk)
    
    def leg(self, lg):
        return super().leg(lg)

class Lion(Animal):
    def speak(self, spk):
        print("-"*50)
        print("Lion")
        return super().speak(spk)
    
    def leg(self, lg):
        return super().leg(lg)
    
ob = Dog()
ob.speak("bark")
ob.leg(4)

ob1 = Cat()
ob1.speak("Meow")
ob1.leg(4)

ob2 = Lion()
ob2.speak("Gurrr")
ob2.leg(4)