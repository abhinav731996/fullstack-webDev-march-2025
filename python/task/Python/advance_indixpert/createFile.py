import json

path = r"/Users/abcd/Desktop/createByUser/"

def writeFilelogs(source):
    with open("filecounter.json","w") as file:
        file.write(json.dumps(source,indent=4))

def readjsonfile():
    with open("filecounter.json","r") as file:
        print(json.dumps(file.read()))

listdata=[]
def writeFile():
    choice = int(input("Enter how many file you want to create: "))
    
    if choice<10:
        dictlistoffile={}
        for i in range(choice):
            ucreate = f"userCreated{i+1}.txt"
            dictlistoffile["id"]=i
            dictlistoffile["name"]=ucreate
        
            base = path+ucreate 

            dicdata = {}
            dicdata["data"] = f"Hello user {i+1}"

            with open(base, "w") as file:
                file.write(json.dumps(dicdata, indent=4))

            print(f"successfully created file {i+1}!!")
            listdata.append(dictlistoffile)
            
        
    else:
        print("please select form 1-10")

    writeFilelogs(listdata)

def readfile(data):
    with open(path,"r") as file:
        content = data.read()
    print(content)


while True:

    print("1 for write")
    print("2 for read")
    print("3 for exit")
    option = int(input("Select any option: "))

    if option == 1:
        data = writeFile()
        

    elif option == 2:
        
        readjsonfile()
        inputdata=input("Which file do you want to read : ")


    elif option == 3:
        break
        
    else:
        print("Invalid option try again!!")

    