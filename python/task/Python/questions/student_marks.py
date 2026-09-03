import json

id = int(input("Enter your ID: "))
name = input("Enter name: ")
add = input("Enter Address: ")

hindi = int(input("Enter Hindi marks: "))
eng = int(input("Enter eng marks: "))
math = int(input("Enter math marks: "))
science = int(input("Enter science marks: "))

total = (hindi+eng+math+science)
avg = (hindi+eng+math+science)/4

student_list  = []

data = {}

data["id"] = id
data["name"] = name
data["address"] = add
data["marks"] = [
    {"Hindi= ":hindi},
    {"English= ": eng},
    {"Math= ": math},
    {"Science= ": science}
]
data["total"] = total
data["average"] = avg

student_list.append(data)
# print(json.dumps(student_list, indent=4))
 
print("*"*20,"result","*"*20)

print("ID = ",id)
print("Neme = ",name)
print("Address = ",add)
print("Total marks = ", total)
print("Average = ", avg)