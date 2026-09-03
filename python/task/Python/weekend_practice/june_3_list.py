# data = ["one", "two", "three", "two", "four", "three"]
# data1 = [1,4,3,2,6,4,5,2,1,7]

# # print(set(data))
# print(data)
# print(data1)

# ****************************** List of student ***********************************

print("*"*50)

id = int(input("Enter ID: "))
name  = input("Enter name: ")
quli1 = input("Enter qualfication: ")
pass1 = input("enter passing year: ")

quli2 = input("Enter qualfication: ")
pass2 = input("enter passing year: ")

print("*"*50)

id1 = int(input("Enter ID: "))
name1  = input("Enter name: ")
quli3 = input("Enter qualfication: ")
pass3 = input("enter passing year: ")

quli4 = input("Enter qualfication: ")
pass4 = input("enter passing year: ")

data = []

student1 = {}

student1["ID"] = id
student1["Name"] = name
student1["Qualification"] = [
   { "name":quli1, "pass":pass1},
   { "name":quli2, "pass":pass2},
]

student2 = {}
student2["ID"] = id1
student2["Name"] = name1
student2["Qualification"] = [
   { "name":quli3, "pass":pass3},
   { "name":quli4, "pass":pass4},
]

data.append(student1)
data.append(student2)

print("*"*50)
print(data)