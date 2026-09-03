# ******************* Get keys & values ************************

# data = [1,2,3,4]
# data = [{"name":"Abhinav"}, {"id:101"}]
# # print(data[1])

# print(data[1].keys())
# print(data[1].values())

# ******************* Set ************************

# data = ["one", "two", "one"]
# data = {"one", "two", "one"}
# print(data)

# ******************* Student data ************************

# id 
# name 
# add
# contact
# qualification

print("="*50)
id = int(input("Please enter your id: "))
name = input("please enter your name: ")
add = input("please enter your address: ")
contact = input("please enter your contact: ")
qualif = input("Please enter your qualification: ")
qualifYear = input("Please enter your passing year: ")
qualif2 = input("Please enter your 2nd qualification: ")
qualifYear2 = input("Please enter your passing year: ")

print("="*50)
id1 = int(input("Please enter your id: "))
name1 = input("please enter your name: ")
add1 = input("please enter your address: ")
contact1 = input("please enter your contact: ")
qualif1 = input("Please enter your qualification: ")
qualifYear1 = input("Please enter your passing year: ")
qualif3 = input("Please enter your 2nd qualification: ")
qualifYear3 = input("Please enter your passing year: ")

print("="*50)

data = [
    {
        "ID: ":id,
        "Name: ":name,
        "Address: ":add,
        "Contact: ":contact,
        "Qualification: ":[
            {"name:": qualif},
            {"Passing year:": qualifYear},
            {"name:": qualif2},
            {"Passing year:": qualifYear2}
        ]
        
    },
    {
        "ID: ":id1,
        "Name: ":name1,
        "Address: ":add1,
        "Contact: ":contact1,
        "Qualification: ":[
            {"name:": qualif1},
            {"Passing year:": qualifYear1},
            {"name:": qualif3},
            {"Passing year:": qualifYear3}
        ]
        
    }
]

print(data)
# print(data[0])
# print(data[1])

