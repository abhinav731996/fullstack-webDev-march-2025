# *************** for numaric ******************

# flag = 1
while True:

    otp = input("enter 6 digit otp: ")
    if len(otp) == 6 and otp.isdigit() and int(otp)>0:
        print("success")
        # flag = 0
        break
    else:
        print("try again")



# ************** for alphabhets **************

# flag = 1
# while True:

#     name = input("Enter name: ")
#     if name.isalpha():
#         print(name)
#         flag = 0
#         break
        
#     else:
#         print("try again")


