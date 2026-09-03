class Person:

    def getName(self):
        print("I am person")

    def eat(self):
        print("Person can eat")

class Student(Person):

    def getName(self):
        print("I am student")
        super().getName()


class Teacher(Person):

    def getName(self):
        print("I am a teacher")

ob = Student()

ob.getName()
ob.eat()

ob1 = Person()
ob1.getName()



# class Shape:

#     def area(self):
#         print("My area: ")


# class Rectangle(Shape):

#     def area(self,l,b):
#         print("Area of rectangle: ", l*b)

# class Circle(Shape):

#     def area(self,r):
#         print("Area of circle: ",(3.14)*r**2)

# ob = Rectangle()
# ob.area(20,15)

# ob1 = Circle()
# ob1.area(2)




# class Student:

#     def name(self):
#         print("First name: ")

#     def name(self, age=20):
#         print("Second name: ", age)


# class Student2:

#     def name(self):
#         print("This is child ")

# # ob = Student()
# # ob.name(10)

# ob1 = Student2()
# ob1.name()