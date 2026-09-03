
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
            print("Select from menu")
            print("*"*50)
            

def studentRegistration(student):
    
    studentData = {}

    while True:

        id = input("Enter ID: ")
        if len(id) == 3 and id.isdigit() and int(id) >100:
            studentData["Id"] = id
            break
        else:
            print("Invalid entry!! Try again")
    
    while True:

        fname = input("Enter first name: ")
        
        if fname.isalpha():
            studentData["First name"] = fname
            break
        else:
            print("Invalid entry!! Try again")

    while True:
         
        lname = input("Enter last name: ")

        if lname.isalpha():
            studentData["Last name"] = lname
            break
        else:
            print("Invalid entry!! Try again")

    while True:

        contact = input("Enter contact number: ")

        if len(contact)==10 and contact.isdigit() and  int(contact)>0:
            studentData["Contact"] = contact
            break
        else:
            print("Invalid entry!! Try again")

    qualifiaction = []
    print("Enter Qualification: ")

    while True:
        decision = input("Do you want to add qualification? (yes/no): ")
        if decision.lower() == "yes" and decision.isalpha():

            subquali = {}

            while True:
                quali = input("Enter Qualification: ")

                if quali.isalnum():
                    subquali["Qualification"] = quali
                    break
                else:
                    print("Invalid entry!! Try again")

            while True:
                passyr = input("Entry passing year: ")
                
                if len(passyr) == 4 and passyr.isdigit() and int(passyr)>0:
                    subquali["Passing Year"] = passyr
                    break
                else:
                    print("Invalid entry!! Try again")

            qualifiaction.append(subquali)
        
        elif decision.lower() == "no" and decision.isalpha():
            break

        else:
            print("Invalid entry!! Try again")

    studentData["Qualification"] = qualifiaction

    student.append(studentData)
    

def getStudentRecord(student):

    print("*"*50)
    
    print("\tStudent details")
    print(student)
    
    print("*"*50)


def search(student):
    
    pass

    # while True:
    #     print("Press 1 for search by ID: ")
    #     print("Press 2 for search by Name: ")

    #     choice = input("Enter any number: ")

    #     if choice == "1" and choice.isdigit():
    #         student_id = int(input("Enter student ID: "))
    #         for key, value, in student.item():
    #             if value == student_id:
    #                 print(f"{key} : {value}")
    #                 break
    #             else:
    #                 print("Invalid entry!! Try again")
        
        # elif choice == 2:


menu()
