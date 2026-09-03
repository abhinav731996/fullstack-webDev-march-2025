
student = []

studentData = {}

def menu():
    while True:

        print("press1 for student registration: ")
        print("press 2 for display record: ")
        print("press 3 for exit")
        option = input("please select any option: ")
        if option == "1" and option.isdigit():
            studentResgi()  
        elif option == "2" and option.isdigit():
            getStudentRecord()
        elif option =="3" and option.isdigit():
            break
        else:
            print("*"*50)
            print("\tplease select from menu!!")
            print("*"*50)


def studentResgi():

    while True:
            id = (input("Enter ID: "))

            if len(id)==3 and id.isdigit() and int(id)>100:
                studentData["Id"] = id
                break
            else:
                print("try again!!")
                
    while True:
            fname = input("Enter first name: ")

            if fname.isalpha():
                studentData["First Name"] = fname
                break
            else:
                print("try again!!")



    while True:
        lname = input("Enter last name: ")

        if lname.isalpha():
            studentData["Last Name"] = lname
            break
        else:
            print("try again!!")


    while True:
        contact = (input("Enter contact: "))

        if len(contact)==10 and contact.isdigit() and int(contact)>0:
            studentData["Contact"] = contact
            break
        else:
            print("try again!!")
            
        

    quaalification = []
    print("enter qualififcation: ")

    while (True):
        decision = input("Do you want to add Qualification? (yes/no): ")
        if decision.lower()== "yes" and decision.isalpha():
            subqualif = {}

            while True:
                quali = input("Enter qualification name: ")

                if quali.isalnum():
                    subqualif["Name"] = quali
                    break
                else:
                    print("try again!!")


            while True:
                passyr = (input("Enter passing year: "))

                if len(passyr)==4 and passyr.isdigit() and int(passyr)>0:
                    subqualif["Passing year"] = passyr
                    break
                else:
                    print("try again!!")


            quaalification.append(subqualif)

        elif decision.lower()== "no" and decision.isalpha():
            break

        else:
            print("please try again!!")
    
    studentData["Quaalification"] = quaalification
    
    student.append(studentData)


def getStudentRecord():
    print("Student Details: ")
    print(student)

menu()
