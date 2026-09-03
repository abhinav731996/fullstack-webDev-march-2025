# fruits = ["apple", "banana", "cherry"]
# for fruit in fruits:
#     print(fruit)


# ******************************************
# for n in range(1,11):
#     print(n)



# ******************************************

# x = "1"
# y = "2"

# z = x + y
# x = z + y
# print(x)


# ******************************************


number = [1,4,5,60,30]

anynumber = int(input("enter any number:  "))

num = 0
flag = 1

while(num<len(number)):
    if number[num] == anynumber:
        flag = 0
        break
    num +=1

if flag == 0:
    print("matched!!")
else:
    print("not matched")