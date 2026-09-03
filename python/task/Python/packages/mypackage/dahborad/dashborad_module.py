from mypackage.api import api_module
from mypackage.database import database_module
from mypackage.domain import domain_module
from mypackage.report import report_module
from mypackage.image import image_module



def student_dashboard():

    while True:
        print("press 1 for API: ")
        print("press 2 for database: ")
        print("press 3 for domain: ")
        print("press 4 for image: ")
        print("press 5 for report: ")
        print("press 6 for exit: ")

        option = input("enter any option: ")

        if option == "1" and option.isdigit():
            api_module.student_api()
        elif option == "2" and option.isdigit():
            database_module.student_database()
        elif option == "3" and option.isdigit():
            domain_module.student_domain()
        elif option == "4" and option.isdigit():
            image_module.student_image()
        elif option == "5" and option.isdigit():
            report_module.student_report()
        elif option == "6" and option.isdigit():
            break
        else:
            print("*"*50)
            print("\t Please select from menu")
            print("*"*50)

    