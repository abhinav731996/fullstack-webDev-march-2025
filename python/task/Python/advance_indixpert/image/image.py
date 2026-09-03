filepath = "advance_indixpert/image/random.jpg"
filepath2 = "advance_indixpert/image/readImage.jpg"



with open(filepath,"rb") as file:
    data = file.read()
    
    print(data)


with open(filepath2,"wb") as file: 
     file.write(data)


# with open(filepath2,"wb") as file:
#     data = file.read()
#     print(data)