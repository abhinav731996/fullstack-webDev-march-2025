

def studentRegistration():

    studentList = []
    student = {}

    student["Id"] = input("Enter student ID: ")
    student["Name"] = input("Enter student name: ")
    student["Qualififcation"] = [

        {"name": "10th", "passing": 2010},
        {"name": "12th", "passing": 2012}

    ]
    studentList.append(student)
    return studentList