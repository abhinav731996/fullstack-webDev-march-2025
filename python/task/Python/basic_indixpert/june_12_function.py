
# def menu():
#     print("press 1 for student registration: ")
#     print("press 2 for display record: ")

# for n in range(1,6):
#     print(n)
#     menu()


# *********************************************

studeentData = {}

def menu():
    while True:

        print("press1 for student registration: ")
        print("press 2 for display record: ")
        print("press 3 for exit")
        option = int(input("please select any option: "))
        if option == 1:
            studentResgi()  
        elif option == 2:
            getStudentRecord()
        elif option ==3:
            break
        else:
            print("*"*50)
            print("\tplease select from menu!!")
            print("*"*50)


def studentResgi():
    studeentData["id"] = input("enter ID: ")
    studeentData["name"] = input("enter name: ")

def getStudentRecord():
    print("Student Details: ")
    print(studeentData)



menu()
