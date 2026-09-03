import json
def search(data):
        

    while True:
        print("Press 1 for search by ID: ")
        print("Press 2 for search by Name: ")
        print("Press 3 for search by Qualification name: ")
        print("Press 4 for search by Passing year: ")
        print("Press 5 for search by Date: ")
        print("Press 6 for exit: ")
     

        choice = input("Enter any number: ")
        
        if int(choice) == 1:
            student_id = int(input("Enter student ID: "))
            
            for i in data:
                if i["id"]==student_id:
                    print("Results Available !")
                    print(json.dumps(i,indent=4))


        elif int(choice) == 2:
            
            student_name = input("Enter student First Name: ")

            for i in data:
                if i["FirstName"].lower()==student_name.lower():
                    print("Result Available !!")
                    print(json.dumps(i,indent=4))

        elif int(choice) == 3:
            qname = input("Enter qualification name: ")

            for n in data:
                for y in n["Qualification"]:
                    if y["Qualification"] == qname:
                                print(json.dumps(n,indent=4))

        elif int(choice) == 4:
            pyr = input("Enter passing year: ")
            pyr.isdigit()
            
            for i in data:
                 for j in i["Qualification"]:
                      if j["PassingYear"] == pyr:
                           print(json.dumps(i,indent=4))
        
        elif int(choice) == 5:
             dat = input("Enter date(yyyy-mm-dd): ")
             for i in data:
                if i["createdDate"]==dat:
                    print("Results Available !")
                    print(json.dumps(i,indent=4))


        elif int(choice) == 6:
             break
       

        else:
            print("*"*50)
            print("\tSelect from above options!!")
            print("*"*50)
        
        
