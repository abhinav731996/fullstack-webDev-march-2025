from package.registration.studentRegistration import registration
from package.display.studentDisplay import getStudentRecord
from package.search.studentSearch import search

def dashboard_management():

    data = []

    while True:

        print("Press 1 for registration: ")
        print("Press 2 to display record: ")
        print("Press 3 for search: ")
        print("Press 4 for exit: ")

        option = int(input("Select any option: "))

        if option == 1:
            data = registration()

        elif option == 2:
            if data:
                getStudentRecord(data)
            else:
                print("No record found!!")

        elif option == 3:
            if data:
                search(data)
            else:
                print("No record found!!")

        elif option == 4:
            break

        else:
            print("*"*50)
            print("\tSelect from menu")
            print("*"*50)