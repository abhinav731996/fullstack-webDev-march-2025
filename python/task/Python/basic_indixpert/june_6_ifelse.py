# num = [1,2,3,4]

# if len(num)>2:
#     print("Number is +ve")

# first = 10
# sec = 20

# if first>sec:
#     print("1st num greter then 2nd")
# if first<sec:
#     print("2nd num greter then 1st")


# ********************************************************

# num1 = int(input("enter any number: "))
# # num2  = input("enter another number: ")

# if num1%2 == 0:
#     print("number is even")
# else:
#     print("this is odd")


# ********************************************************

num1 = int(input("please enter 1st number: "))
num2 = int(input("please enter 2nd number: "))

print("press a for sum")
print("press b for sub")
print("press c for mult")
print("press d for divi")

num = input("please select form menu: ").lower()

if num == "a":
    print("Sum",num1+num2)
elif num =="b":
    print("Sub",num1-num2)
elif num =="c":
    print("mult",num1*num2)
elif num =="d":
    print("div",num1/num2)
else:
    print("Please select valid option!!")
