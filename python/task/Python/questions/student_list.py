Student = []


total = int(input("How many students want to register (1-10): "))
if total > 0 and total <= 10:
        for i in range(total):  
            print(f"\nStudent {i+1}")
            Studentdata = {}

            Studentdata["Id"] = int(input("Enter Id: "))
            Studentdata["Name"] = input("Enter Name: ")
            Studentdata["Address"] = input("Enter Address: ")
            Studentdata["Contact No"] = int(input("Enter Contact No: "))

            Qualification = []
            print("Enter Qualification Details:")
            while True:
                decision = input("Do you want to add a qualification? (YES/N)): ")
                if decision.upper() == "YES":
                    subqualification = {}
                    subqualification["Name"] = input("Enter Qualification Name: ")
                    subqualification["Passing Year"] = input("Enter Passing Year: ")
                    Qualification.append(subqualification)
                else:
                    break

            Studentdata["Qualification"] = Qualification
            Student.append(Studentdata)

else:
    print("Please enter a number between 1 and 10.")


print("*"*100)
for student in Student:
    print(student)
