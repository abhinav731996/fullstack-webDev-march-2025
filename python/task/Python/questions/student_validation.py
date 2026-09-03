student = []

flag = 1

number  = int(input("How many student you want to enter 1-10: "))



if number > 0 and number <= 10:
    for i in range(number):
        print(f"Student{i+1}")
        studentData = {}

        while True:
            id = (input("Enter ID: "))

            if len(id)==3 and id.isdigit() and int(id)>100:
                studentData["Id"] = id
                flag = 0
                break
            else:
                print("try again!!")
                
        

        while True:
            fname = input("Enter first name: ")

            if fname.isalpha():
                studentData["First Name"] = fname
                flag = 0
                break
            else:
                print("try again!!")



        while True:
            lname = input("Enter last name: ")

            if lname.isalpha():
                studentData["Last Name"] = lname
                flag = 0
                break
            else:
                print("try again!!")




        while True:
            contact = (input("Enter contact: "))

            if len(contact)==10 and contact.isdigit() and int(contact)>0:
                studentData["Contact"] = contact
                flag = 0
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
                        flag = 0
                        break
                    else:
                        print("try again!!")


                while True:
                    passyr = (input("Enter contact: "))

                    if len(passyr)==4 and passyr.isdigit() and int(passyr)>0:
                        subqualif["Passing year"] = passyr
                        flag = 0
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

else:
    print("please enter number b/w 1-10!!")

print("*"* 100)

for item in student:
    print(item)
