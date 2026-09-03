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

void createAcc();
void displayAcc();

int main()
{
    createAcc();
    displayAcc();

    return 0;
}

void createAcc()
{
    if (count >= 10)
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
            while (getchar() != '\n')
                ; // clear input buffer
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