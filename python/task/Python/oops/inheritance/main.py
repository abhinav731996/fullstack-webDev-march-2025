
class Animal:

    def speak(self):
        print("animal can speak")

    def eat(self):
        print("animal can eat")

class Dog(Animal):
    def bark(speak):
        print("dog can bark")


ob = Dog()
ob.bark()
ob.eat()
ob.speak()



class Father:
    def father(self):
        print("farming")

class Mother:
    def mother(self):
        print("cooking")

class child(Father,Mother):
    def coding(self):
        print("Coding")

ob = child()

ob.father()
ob.mother()
ob.coding()



