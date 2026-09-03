
def studentRegistration():
    
    student = []
    studentData = {}

    while True:

        id = input("Enter ID: ")
        if len(id) == 3 and id.isdigit() and int(id) >100:
            studentData["id"] = id
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
    return student
