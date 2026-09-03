from abc import ABC,abstractmethod

class PaymentGetway(ABC):

    @abstractmethod
    def processPayment(self):
        pass

class CreditCardPayment(PaymentGetway):
    def processPayment(self,amount):
        print(f"processing Cradit Card payment: {amount}")

class PaypalPayment(PaymentGetway):
    def processPayment(self, amount):
        print(f"Processing paypal payment: {amount}")

class UPIPayment(PaymentGetway):
    def processPayment(self, amount):
        print(f"Processing UPI payment: {amount}")

ob = CreditCardPayment()
ob.processPayment(2000)

ob1 = UPIPayment()
ob1.processPayment(3000)

ob2 = PaypalPayment()
ob2.processPayment(4000)