from studentRegist import studentRegistration
from studentDisplay import getStudentRecord
from studentSearch import search

def menu():

    student = []

    while True:

        print("Press 1 for registration: ")
        print("Press 2 to display record: ")
        print("Press 3 for search: ")
        print("Press 4 for exit: ")

        option = input("Select from above options: ")

        if option == "1" and option.isdigit():
            studentRegistration(student)
        
        elif option == "2" and option.isdigit():
            getStudentRecord(student)

        elif option == "3" and option.isdigit():
            search(student)

        elif option == "4" and option.isdigit():
            break

        else:
            print("*"*50)
            print("\tSelect from menu")
            print("*"*50)
            

menu()
