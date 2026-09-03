# for n in range(1,11):
#     print(n)

# ******************* table using for loop *********************
# for n in range(1,11):
#     print("2 *",n,"=", 2*n)


# ******************* table using for loop *********************
# for n in range (1,51):
#     for m in range (1,11):
#         print(f"{n}*{m}={n*m}")
    
#     print("*"*8)


# ******************* table 1-50 using for loop *********************

# for a in range(1,51):
#     for b in range(1,11):
#         print(f"{a}*{b}={a*b}")
#     print("*"*50)


# ******************* find & match number using for loop *********************

# listData = [10,20,30,40,50,60,70,80,90]

# num = int(input("enter any number: "))

# for item in listData:
#     if num == item:
#         print("Matched")
    

## ******************* find & match name using for loop *********************

# listdata = [10,20,30,80,90,40,50]
# listdata = ["abhinav", "kailash","denish","aditya"]

# # num = int(input("enter number: "))
# name = (input("enter name: "))

# for item in listdata:
#     if item.lower() == name.lower():
#         print("number exist")
    

# **************************************dictionary data

# dicdata = {"id":101, "name":"Abhinav", "Address":"Rohtak"}

# for keys,values in dicdata.items():

# for keys,values in dicdata:
#     print(keys,values)



# **************************************dictionary data

# dicdata = [{"id":101, "name":"Abhinav", "Address":"Rohtak"},
#            {"id":102, "name":"Abhinav", "Address":"Rohtak"}
#            ]
# for item in dicdata:
#     for keys,values in item.items():
#         print(keys,"=", values)
    



def display_students(studentdata):
    if not studentdata:
        print("No student data to display.")
        return

    print("=" * 100)
    print(" " * 30 + "All Registered Students")
    print("=" * 100)
    
    count = 1  

    for student in studentdata:
        print(f"Student {count}")
        print("-" * 50)
        for key, value in student.items():
            if key == "qualification":
                print("Qualifications:")
                for i in value:
                    print(f"  - {i['name']} ({i['passing year']})")
            else:
                print(f"{key}: {value}")
        count += 1