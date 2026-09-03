from studentRegis import studentRegistration
from studentSearch import search
from studentDisplay import getStudentRecord

def dasbord_management():

    data = []   
    
    while True:
        option = int(input("enter your option: "))
        if option == 1:
            # studentRegistration()
            data = studentRegistration()
            # data = module1.studentRegistration()
        elif option == 2:
            getStudentRecord(data)
            # module2.get_student_record(data)
        elif option == 3:
            search(data)
            # modulesearch.searchStudentById(data)
            
        elif option == 4:
            break
        else:
            print("*"*50)
            print("\tSelect from menu")
            print("*"*50)
            

