students = []

for i in range(5):
    print(f"student{i+1}")
    studentdata ={}
    studentdata["ID"] = 101+i
    studentdata["Name"] = input("Enter name: ")
    studentdata["Contact"] = int(input("Enter mobile number: "))
    studentdata["Qualification"] = [
        {"Name": input("Enter 1st Qualifiaction: "), "Passing": input("Enter passing year: ")},
        {"Name": input("Enter 2nd Qualifiaction: "), "Passing": input("Enter passing year: ")},
    ]

    students.append(studentdata)

print("*"*100)

for studentdata in students:
    print(studentdata)

