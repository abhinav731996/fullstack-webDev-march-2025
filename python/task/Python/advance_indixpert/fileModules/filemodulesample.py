import json

path = r"/Users/abcd/Desktop/filemodule/newfile/sample.txt"

def writefile():

    dicdata = {}
    dicdata["data"] = input("Please enter any data: ")

    with open(path, "w") as file:
        file.write(json.dumps(dicdata, indent=4))

    print("success!!")

    return

def readfile(data):

    with open(path, "r") as file:
        content = file.read(data)
    print(content)


while True:

    print("1 for write")
    print("2 for read")
    print("3 for exit")
    option = int(input("Select any option: "))

    if option == 1:
        data = writefile()

    elif option == 2:
        readfile(data)

    elif option == 3:
        break
