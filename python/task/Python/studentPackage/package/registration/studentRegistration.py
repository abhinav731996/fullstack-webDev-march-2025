import datetime

def registration():

    student = []
    studentData = {}

    while True:

        id = input("Enter ID: ")

        if len(id) == 3 and id.isdigit() and int(id)>100:
            studentData["id"] = int(id)
            break
        else:
            print("\nInvalid Entry!! try again\n")

    while True:

        fname = input("Enter your first name: ")

        if fname.isalpha():
            studentData["FirstName"] = fname
            break
        else:
            print("\nInvalid Entry!! try again\n")

    while True:
        
        lname = input("Enter your last name: ")

        if lname.isalpha():
            studentData["LastName"] = lname
            break
        else:
            print("\nInvalid Entry!! try again\n")

    while True:

        contact = input("Enter your contact number: ")

        if len(contact) == 10 and contact.isdigit and int(contact)>0:
            studentData["Contact"] = contact
            break
        else:
            print("\nInvalid Entry!! try again\n")

    qualification = []
    print("Enter Qualification: ")

    while True:

        decision = input("Do you want to add qualification(yes/no)? ")

        if decision.lower() == "yes" and decision.isalpha():

            subquali = {}

            while True:
                quali = input("Enter Qualification: ")

                if quali:
                    subquali["Qualification"] = quali
                    break
                else:
                    print("\nInvalid Entry!! try again\n")

            while True:
                passyr = input("Enter passing year: ")

                if len(passyr) == 4 and passyr.isdigit() and int(passyr)>0:
                    subquali["PassingYear"] = passyr
                    break
                else:
                    print("\nInvalid Entry!! try again\n")

            qualification.append(subquali)

        elif decision.lower() == "no" and decision.isalpha():
            break

        else:
            print("\nInvalid Entry!! try again\n")

        studentData["Qualification"] = qualification

    studentData["createdDate"] = str(datetime.datetime.now().date())

    student.append(studentData)

    return student