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

void displayMenu();

int main()
{
    int choice;
    int running = 1;

    while (running)
    {
        displayMenu();
        printf("Enter your choice: ");
        if (scanf("%d", &choice) == 1)
        {
        }
        else
        {
            printf("\nInvalid input! Enter a number.\n");
            while (getchar() != '\n'); // Clear input buffer
            continue;
        }

        switch (choice)
        {
        case 1:
            // createAccount();
            break;

        case 2:

            // displayAcc();
            break;

        case 3:

            // withdraw();
            break;

        case 4:

            // checkBalance();
            break;

        case 5:

            // deposit();
            break;

        case 6:
            printf("Exiting the program.\n Thank you!\n");
            running = 0;
            break;

        default:
            printf("Invalid choice! Please select from the menu.\n");
        }
    }

    return 0;
}
void displayMenu()
{
    printf("\nMenu:\n");
    printf("1. Create Account\n");
    printf("2. Display Account Details\n");
    printf("3. Withdraw\n");
    printf("4. Check Balance\n");
    printf("5. Deposit\n");
    printf("6. Exit\n");
}
