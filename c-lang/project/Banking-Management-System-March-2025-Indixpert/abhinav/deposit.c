#include <stdio.h>
#include <string.h>

// global variable
int choice;
int id[5];
char name[5][30]; 
char father[5][30];
int age[5];
long long int accountNo[5];
long long int aadharNo[5];
int balance[5] = {500}; // Set initial balance to 500 for all accounts

int count = 0;

void deposit();

int main()
{
    deposit();
    return 0;
}

void deposit()
{
    int inputId, amt, found = 0;
    while (1)
    {
        printf("Enter Account ID to Deposit into: ");
        if (scanf("%d", &inputId) == 1)
        {

            for (int i = 0; i < count; i++)
            {
                if (id[i] == inputId)
                {
                    found = 1;
                    while (1)
                    {
                        printf("Enter amount to deposit: ");
                        if (scanf("%d", &amt) == 1)
                        {
                        }
                        else
                        {
                            printf("\nInvalid input! Please enter valid Amount.\n");
                            while (getchar() != '\n')
                                ;
                        }
                        if (amt > 0 && amt%100 == 0)
                        {
                            balance[i] += amt;
                            printf("\nDeposit %d successfully.\n New Balance: %d\n", amt, balance[i]);
                            break;
                        }
                        else
                        {
                            printf("\n Invalid amount.\n");
                        }
                        break;
                    }
                    
                }
                else
                {
                    printf("\nAccount not found! Try again!!\n");
                }
            }
        }
        else
        {
            printf("\nInvalid input! Please enter valid ID & try again.\n");
            while (getchar() != '\n')
                ;
        }
        break;
    }
}
