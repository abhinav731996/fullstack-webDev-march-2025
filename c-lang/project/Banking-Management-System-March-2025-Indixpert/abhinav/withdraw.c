
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

void withdraw();

int main ()
{
    withdraw();
    return 0;
}
void withdraw()
{
    int inputId, amt, found = 0;
    while (1)
    {
        printf("Enter Account ID to withdraw from: ");
        if (scanf("%d", &inputId) == 1)
        {
            printf("Invalid input! Please enter valid ID & try again.\n");
            while (getchar() != '\n');
            return;
        }
            for (int i = 0; i < count; i++)
            {
                if (id[i] == inputId)
                {
                    found = 1;
                    while (1)
                    {
                        printf("Enter amount to withdraw: ");
                        if (scanf("%d", &amt) != 1)
                        {
                            printf("\nInvalid input! Please enter valid Amount.\n");
                            while (getchar() != '\n');
                            return;
                        }
                        
                        if (amt > 100 && amt <= balance[i] && amt%100 == 0 && amt<100000)
                        {
                            balance[i] -= amt;
                            printf("\nWithdrawn %d successfully.\n New Balance: %d\n", amt, balance[i]);
                        }
                        else
                        {
                            printf("\nInsufficient balance or invalid amount.\n");
                        }
                        break;
                    }
                }
                else
                {
                    printf("\nAccount not found! Try again!!\n");
                }
            }
        break;
    }
}
