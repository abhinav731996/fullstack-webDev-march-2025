class BankingManagement:
    
    def task1(self):
        print("Create repository in Github")

    def task2(self):
        print("Create Account")
    
    def task3(self):
        print("Deposit")

    def task4(self):
        print("Withdraw")

    def task5(self):
        print("Check balance")

    
class Abhinav(BankingManagement):
    def perform_task(self):
        print("Abhinav is performing task 1: ")
        self.task1()
        print("*"*50)

class Alok(BankingManagement):
    def perform_task(self):
        print("Alok is performaing task 2: ")
        self.task2()
        print("*"*50)

class Dinesh(BankingManagement):
    def perform_task(self):
        print("Dinesh is performing task 3: ")
        self.task3()
        print("*"*50)

class Bharat(BankingManagement):
    def perform_task(self):
        print("Bharat is performing task 4: ")
        self.task4()
        print("*"*50)

class Aditya(BankingManagement):
    def perform_task(self):
        print("Aditya is performing task 5: ")
        self.task5()
        print("*"*50)


abhi = Abhinav()
alk = Alok()
dns = Dinesh()
brt = Bharat()
adi = Aditya()

abhi.perform_task()
alk.perform_task()
dns.perform_task()
brt.perform_task()
adi.perform_task()



