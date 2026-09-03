def searchStudentById(data):
    id = input("enter id")
    for dic in data:
        if dic["id"] == id:
            print(dic)
