number = [1,2,30,40,5,7,9]

anyNum  = int(input("Enter any number: "))

num = 0
flag = 1

# while num <len(number):
#     if number[num] == anyNum:
#         print("matched!!")
#         flag = 0
            
#     num+=1


# *****************************************

# while num <len(number):
#     if number[num] == anyNum:
#         flag = 0 
#         break

#     num+=1

#     if flag == 0:
#         print("matched")
#     else:
#         print("not matched")



# *****************************************

for num in number:
    if num == anyNum:
        flag = 0
    if flag == 0:
        print("matched")
        break
    
        
    # num +=1
