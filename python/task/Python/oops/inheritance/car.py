

class Vehicle:

    def __init__(self):
        self.make = str
        self.model = str
        self.year = str

    
class Car(Vehicle):

    def display_info(self):
        print("Car: ")
        print(self.make)
        print(self.model)
        print(self.year)

class Bike(Vehicle):

    def display_info(self):
        print("*"*50)
        print("Bike: ")
        print(self.make)
        print(self.model)
        print(self.year)

ob = Car()
ob.make = "Koenigsegg"
ob.model = "Agera"
ob.year = "2022"

ob.display_info()


ob1 = Bike()
ob1.make = "Ducati "
ob1.model = "Panigale v4"
ob1.year = "2022"

ob1.display_info()

