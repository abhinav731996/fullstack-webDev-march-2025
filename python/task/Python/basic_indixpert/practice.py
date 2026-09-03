# data = {"breakfast": "8-9am", "lunch": "1=2pm", "dinner": "8-9pm"}
# data1 = {"breakfast1": "8-9am", "lunch1": "1=2pm", "dinner": "8-9pm"}

# data.pop("lunch")

# data.update(data1)

# name = {"Name": "Abhinav"}
# data1.update(name)

# # print(data.pop("breakfast"))

# # print(data)

# # print(data1)



# list = ["apple", "banana","mango" ]
# print(list[0])


# ******************* user input table using for loop *********************

# num = int(input("Enter any number: "))

# for n in range(1,11):
#     print(f"{num}*{n}={num*n}")


# ******************* table 1-50 using for loop *********************

# for a in range(1,51):
#     for b in range(1,11):
#         print(f"{a}*{b}={a*b}")
#     print("*"*50)



# ******************* find number using for loop *********************

# listData = [10,20,30,40,50,60,70,80,90]

# num = int(input("enter any number: "))

# for item in listData:
#     if num == item:
#         print("Matched")
    

# ******************* dictionary data using for loop *********************

# dicdata = {"id":101, "name": "Abhinav"}

# for data in dicdata.items():
#     print(data)


# ******************* sum divi using user input using if-elif *********************

num1 = int(input("enter 1st number: "))
num2 = int(input("enter 2nd number: "))

print("Press 'a' to sum")
print("Press 'b' to sub")
print("Press 'c' to div")
print("Press 'd' to multi")

choice = input("enter choice: ")

if choice.lower() == "a":
    print(num1+num2)
elif choice.lower() == "b":
    print(num1-num2)
elif choice.lower() == "c":
    print(num1/num2)
elif choice.lower() == "d":
    print(num1*num2)
else:
    print("Invalid option!!")
