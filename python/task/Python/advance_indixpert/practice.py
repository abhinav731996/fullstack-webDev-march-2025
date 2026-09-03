import json 
import datetime

# student = {"id":101, "name": "Kailash", "address": "Gurgaon"} 

# print(json.dumps(student, indent=4))

# -------------------------get keys & values-----------------------------------

# print(student["name"])

# print(student.keys())

# print(student.values())


# ------------------------add/remove/clear key & value------------------------------------

# student["snacks"] = "4-5pm"

# student.pop("address")

# student.clear()

# print(student)


# ---------------------------remove dubblicate value---------------------------------

# data = ["one", "two", "two", "three", "one", 2, 4, 5, 2]
# print(set(data))


# ----------------------------modified list--------------------------------

# data[2]=7
# print(data)


# ----------------------------shorting(accending/decending)--------------------------------

# num = [1,12,15,2,8,59,33,23]
# num.sort(reverse = False)
# num.sort(reverse = True)
# print(num)


# ---------------------------even/odd---------------------------------

# num = int(input("Enter number: "))

# if num%2 ==0:
#     print("even number")
# else:
#     print("odd number")


# --------------------------for loop ----------------------------------

# fruits = ["apple", "banana", "cherry"]

# for item in fruits:
#     print(item)

# for n in range(1,11):
#     print(n)


# --------------------------match number in list----------------------------------

# listData = [1,2,3,4,5,6]
# num = int(input("Enter any number : "))

# for item in listData:
#     if num in listData:
#         print("number exists")
#         break
#     else:
#         print("number not exists")
#         break
# --------------------------finding content in dictionary----------------------------------

# dicdata = {"id":101, "name": "Kailash", "address": "Gurgaon"}

# for key,value in dicdata.items():
#     print(key, "=", value)

# ---------------------------finding content in lsit dictionary---------------------------------

# dicdata = [{"id":101, "name": "Kailash", "address": "Gurgaon"},
#            {"id":102, "name": "Abhinav", "address": "Rohtak"}]

# for item in dicdata:
#     for key,value in item.items():
#         if value is 102:
#             print(item)


# ---------------------------finding content in lsit dictionary from user input---------------------------------

# dicdata = [{"id":101, "name": "Kailash", "address": "Gurgaon"},
#            {"id":102, "name": "Abhinav", "address": "Rohtak"}]

# ident = int(input("enter any ID: "))
# for item in dicdata:
#     for key, value in item.items():
#         if value is ident:
#             print(item)


# -----------------------match otp-------------------------------------

# while True:
#     otp = input("enter 6 digit otp: ")

#     if len(otp) is 6 and otp.isdigit() and int(otp)>0:
#         print("match!!")
#         break
#     else:
#         print("not matched!!")
        

# ----------------------------functions--------------------------------

# def userName():
#     name = input("Enter name: ")
#     return name

# print(userName())

# first = 10
# sec = 20

# def sum(a,b):
#     return a+b

# print(sum(first, sec))


# ------------------------------------------------------------
