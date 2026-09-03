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

void checkBalance();

int main()
{
    checkBalance();
}

void checkBalance()
{

    int inputId, found = 0;
    printf("Enter Account ID to check balance: ");
    while (1)
    {
        if (scanf("%d", &inputId) == 1)
        {

            for (int i = 0; i < count; i++)
            {
                if (id[i] == inputId)
                {
                    printf("\nCurrent balance: %d\n", balance[i]);
                    found = 1;
                    break;
                }
                else
                {
                    printf("\nAccount not found!!\n");
                }
            }
        }
        else
        {
            printf("\nInvalid input! Enter valid ID.\n");
            while (getchar() != '\n'); // Clear input buffer
            continue;
        }
        
    }
}
