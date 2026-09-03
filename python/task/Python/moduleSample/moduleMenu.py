import module1
import module2
import modulesearch

def menu():
    print("press 1 for registration")
    print("press 2 for display data")
    print("press 3 for search data")
    print("press 4 for exit ")


def dasbord_management():

    data = []   
    
    while True:

        option = int(input("enter your option"))
        if option == 1:
            # module1.studentRegistration()
            data = module1.studentRegistration()
        elif option == 2:
            module2.get_student_record(data)
        elif option == 3:
            modulesearch.searchStudentById(data)
        elif option == 4:
            break

menu()
dasbord_management()