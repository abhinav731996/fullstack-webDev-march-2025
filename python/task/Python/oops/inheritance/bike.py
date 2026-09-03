class Vehicle:
    def __init__(self, name):
        self.name = name

    def drive(self):
        print(f"{self.name} is driving...")

class Bike(Vehicle):
    def wheelie(self):
        print(f"{self.name} is doing a wheelie!")

bike1 = Bike("Duke")
bike1.drive()
bike1.wheelie()
