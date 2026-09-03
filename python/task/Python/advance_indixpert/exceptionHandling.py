
# def calculation():
#     a = 10

#     try :
#         b = a/0
#         print (b) 
#         print("success!!")
#         num = input("enter any number: ")

#     except Exception as error:

#         # print(error)
#         pass
#     print("this is second logic")



# calculation()


# ***************************************************


# import datetime

# path = r"/Users/abcd/Desktop/pythonFile/"

# def create_file():
#     try:
#         current_date = datetime.datetime.now().date()

#         ucreated = f"{current_date}.txt"
#         base = path + ucreated

#         with open(base,"x") as file:
#             file.write("This file is created")

#         print("Created successfully.")

#     except Exception as error:
#         print("File exists!!")

# create_file()



# ***************************************************

import json 
import datetime

path = r"/Users/abcd/Desktop/pythonFile/"

diclist = []

def data():
    print("function = (data)")
    dicData = {}
    dicData["id"] = int(input("enter id:"))
    dicData["name"]  = input("enter name: ")

    diclist.append(dicData)
    print("appending dic")


def write_file():
    # try:
        print("fuction = (write_file)")
        userName = input("Enter Username: ")
        data()
        print("function data call succesfully ")
    # except Exception as error:
        currentTime = datetime.datetime.now().strftime("%d-%m-%y_%H:%M")

        logs = f"{userName}, {currentTime}, invalid input in id \n"
        with open("logs.txt","a") as file:
            file.write(logs)
        print("try again!")


write_file()


# ***************************************************

# try:
#     expense = int(input("Enter amount: "))
#     balance = 5000 - expense

#     if balance<500 and balance>0:
#         raise ValueError("low balance!!")
#     print(f"low remaning balance: {balance}")

# except Exception as e:
#     print("Add amount!!")