import datetime
import json

listdata = []
while True:

    print("press 1 for registration: ")
    print("press 2 for display data: ")
    print("press 3 for search: ")
    print("press 4 for exit: ")

    option = int(input("Select any option: "))

    if option == 1:

        for n in range (1,4):
            dicdata = {}
            dicdata["id"] = input("Enter ID: ")
            dicdata["name"] = input("enter name: ")

            if n < 3:
                dicdata["createdDate"] = str(datetime.datetime.now().date())
            else:
                dicdata["createdDate"] = str(datetime.datetime.now().date()+datetime.timedelta(days=2))

            listdata.append(dicdata)

        print(json.dumps(listdata,indent=4))

    elif option == 2:
        print("display data:- ")
        print(listdata)

    elif option == 3:
        while True:
            print("press 1 for search by id: ")
            print("press 2 for search by name: ")
            print("press 3 for search by date(yyyy-mm-dd): ")
            print("press 4 for exit: ")

            choice = int(input("Enter your choice: "))

            if choice == 1:
                student_id = int(input("Enter student ID: "))
                
                for i in listdata:
                    if i["id"]==student_id:
                        print("Results Available !")
                        print(json.dumps(i,indent=4))

            elif choice == 2:
                student_name = input("enter name: ")
                
                for i in listdata:
                    if i["name"] == student_name:
                        print("Results Available !")
                        print(json.dumps(i,indent=4))
            
            elif choice == 3:
                student_date = input("Enter date(yyyy-mm-dd): ")

                for i in listdata:
                    if i["createdDate"] == student_date:
                        print("Results Available !")
                        print(json.dumps(i,indent=4))

            elif choice == 4:
                break

            else:
                print("Please select a valid option: ")

    elif option == 4:
        break
    else:            
        print("Please select a valid option: ")
        
