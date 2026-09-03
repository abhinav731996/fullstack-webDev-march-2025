
import datetime

path = r"/Users/abcd/Desktop/userCreated/"

def create_file():
    choice = int(input("Enter how many file you want to add: "))
    current_date = datetime.datetime.now().date()

    for i in range(choice):

        ucreated = f"{current_date}_{i+1}.txt"
        base = path +ucreated

        with open(base,"w") as file:
            file.write("This file is created")


create_file()