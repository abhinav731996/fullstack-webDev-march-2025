class Banking:

    def __init__(self):
        self.__balance = 10
        self.__account = "Abhinav"

        print("accountHolder: ", self.__account)
        print("balance: ", self.__balance)

        self.__balance2 = int(input("Enter amount you want to add: "))

        self.__total = self.__balance + self.__balance2
        
    def DisplayBankbalance(self):
        print("accountHolder: ", self.__account)
        print("balance: ", self.__total)

ob = Banking()


ob.DisplayBankbalance()