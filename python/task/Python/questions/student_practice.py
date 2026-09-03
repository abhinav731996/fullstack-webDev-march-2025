id = int(input("Enter ID: "))
name = input("Enter name: ")
add = input("Enter address: ")

quali = input("Enter Qualification: ")
passyr = input("Enter Passing year: ")

quali1 = input("Enter another Qualification: ")
passyr1 = input("Enter Passing year: ")

quali2 = input("Enter another Qualification: ")
passyr2 = input("Enter Passing year: ")

id2 = int(input("Enter ID: "))
name2 = input("Enter name: ")
add2 = input("Enter address: ")

quali3 = input("Enter Qualification: ")
passyr3 = input("Enter Passing year: ")

quali4 = input("Enter another Qualification: ")
passyr4 = input("Enter Passing year: ")

quali5 = input("Enter another Qualification: ")
passyr5 = input("Enter Passing year: ")



listData = []

studentDetail1 = {

"Id" : id,
"Name" : name,
"Address" : add,

"qualification" : [
    {"Name":quali, "Passing Year":passyr},
    {"Name":quali1, "Passing Year":passyr1},
    {"Name":quali2, "Passing Year":passyr2}
]
}

studentDetail2 = {

"Id" : id2,
"Name" : name2,
"Address" : add2,

"qualification" : [
    {"Name":quali3, "Passing Year":passyr3},
    {"Name":quali4, "Passing Year":passyr4},
    {"Name":quali5, "Passing Year":passyr5}
]
}
listData.append(studentDetail1)
listData.append(studentDetail2)

print(listData)