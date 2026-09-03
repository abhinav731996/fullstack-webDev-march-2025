#include <stdio.h>
// #include <string.h>

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

// Function declaration
void displayMenu();
void createAccount();
void displayAcc();
void withdraw();
void checkBalance();
void deposit();

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
            createAccount();
            break;

        case 2:

            displayAcc();
            break;

        case 3:

            withdraw();
            break;

        case 4:

            checkBalance();
            break;

        case 5:

            deposit();
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

void createAccount()
{
    if (count >= 5)
    {
        printf("Account limit (5) reached!\n");
    }
    long long int tempAcc;
    id[count] = count + 1123; // for auto-increment ID

    printf("Enter Name: ");
    scanf(" %[^\n]", name[count]);

    while (1)
    {
        printf("Enter Aadhar Number: ");

        if (scanf("%lld", &aadharNo[count]) == 1)
        {
            break;
        }
        else
        {
            printf("\nInvalid output! Please enter only number.\n");
            while (getchar() != '\n'); // clear input buffer
        }
    }

    while (1)
    {
        printf("Enter Age: ");
        if (scanf("%d", &age[count]) == 1)
        {
            break;
        }
        else
        {
            printf("\nInvalid output! Please enter only number.\n");
            while (getchar() != '\n')
                ;
        }
    }

    printf("Enter Father's Name: ");
    scanf(" %[^\n]", father[count]);

    while (1) // for 11 digit number
    {
        printf("enter 11-digit account number: ");
        if (scanf("%lld", &tempAcc) == 1)
        {

            if (tempAcc >= 10000000000 && tempAcc <= 99999999999)
            {
                accountNo[count] = tempAcc;
                break;
            }
            else
            {
                printf("Invalid!! Account number must be 11 digits.\n");
            }
        }
        else
        {
            printf("\nInvalid output! Please enter only number.\n");
            while (getchar() != '\n')
                ;
        }
    }

    balance[count] = 500; // Default balance
    printf("Account created successfully! Account ID: %d\n", id[count]);

    count++;
}

void displayAcc()
{
    if (count == 0)
    {
        printf("\nNo account found!\n");
    }
    else
    {
        for (int i = 0; i < count; i++)
        {
            printf("\n--- Account %d ---\n", i + 1);
            printf("ID: %d\n", id[i]);
            printf("Name: %s\n", name[i]);
            printf("Father's Name: %s\n", father[i]);
            printf("Aadhar Number: %lld\n", aadharNo[i]);
            printf("Age: %d\n", age[i]);
            printf("Account Number: %lld\n", accountNo[i]);
            printf("Balance: ₹%d\n", balance[i]);
        }
    }
}

void withdraw()
{
    int inputId, amt, found = 0;
    while (1)
    {
        printf("Enter Account ID to withdraw from: ");
        if (scanf("%d", &inputId) == 1)
        {

            for (int i = 0; i < count; i++)
            {
                if (id[i] == inputId)
                {
                    found = 1;
                    while (1)
                    {
                        printf("Enter amount to withdraw: ");
                        if (scanf("%d", &amt) == 1)
                        {
                        }
                        else
                        {
                            printf("\nInvalid input! Please enter valid Amount.\n");
                            while (getchar() != '\n')
                                ;
                        }
                        if (amt > 100 && amt <= balance[i] && amt%100 == 0 && amt<100000)
                        {
                            balance[i] -= amt;
                            printf("\nWithdrawn %d successfully.\n New Balance: %d\n", amt, balance[i]);
                            break;
                        }
                        else
                        {
                            printf("\nInsufficient balance or invalid amount.\n");
                        }
                        break;
                    }
                    break;
                }
                else
                {
                    printf("\nAccount not found! Try again!!\n");
                }
            }
        }
        else
        {
            printf("Invalid input! Please enter valid ID & try again.\n");
            while (getchar() != '\n')
                ;
        }
        break;
    }
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
