


def search(student):
    
    # pass

    while True:
        print("Press 1 for search by ID: ")
        print("Press 2 for search by Name: ")
        print("Press 3 for exit: ")

        choice = input("Enter any number: ")

        if choice == "1" and choice.isdigit():
            student_id = int(input("Enter student ID: "))
            for key, value in student.items():
                if value == student_id:
                    print(f"{key} : {value}")
                    break
                    
                else:
                    print("Invalid entry!! Try again")
        
        elif choice == "2" and choice.isdigit():
            name = input("Enter student name: ").lower()
            for key, value in student.items():
                if value == name:
                    print(f"{key} : {value}")
                    break

                else:
                    print("Invalid entry!! Try again")

        elif choice == "3" and choice.isdigit():
            break

        else:
            print("*"*50)
            print("\tSelect from above options!!")
            print("*"*50)
