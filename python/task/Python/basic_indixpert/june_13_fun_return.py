# first = int(input("enter 1st number: "))
# second = int(input("enter 2nd number: "))

# def sum(a,b):
#     return a+b

# def sub(a,b):
#     return a-b

# def multi(a,b):
#     return a*b

# def div(a,b):
#     return a/b


# def output():

#     print("sum: ", sum(first,second))
#     print("sum: ", sub(first,second))
#     print("sum: ", multi(first,second))
#     print("sum: ", div(first,second))



# *******************************************************

# def username():
#     name = input("Enter your name: ")
#     return name


# print("Username: ", username())



# *******************************************************

username = input("enter usernam: ")
password = input("enter password: ")

def dashbord(wname):

    print(f"Welcome = {wname}")

def getDataFromDatabase():
    return {"username":"Abhinav@1234", "password":"Welcome", "name": "Abhinav"}

data = getDataFromDatabase()

uname = data["username"]
passw = data["password"]
name = data["name"]
if username==uname and password==passw:
    dashbord(name)
else:
    print("\nInvalid !!\n")