// #include<stdio.h>
// #include<string.h>
// void menu();
// void createaccount();
// char username[500][500];
// int useraadhar[1000];
// char userage[1000][10];
// char userfathername[1000][50];
// char usernomini[1000][50];
// char nomininame[1000][50];
// char nonomini[1] = {"no available"};
// int i=1;



// int main()
// {
//     menu();
//     createaccount();
//     return 0;
// }
// void menu()
// {
//     printf("\n.....welcome.......\n");
//     printf("\n     processing....\n");
//     printf("\n If you have to new users in this account to follow instructions.");
//     printf("\n This software is totaly based on this users choice and easy to use.\n");
//     printf("\n the guide will be given below according to your choice.\n");
//     printf("\n thank you.\n");
//     printf("\n to continue according to your need.\n");
//     printf("menu here.");
//     printf(" if you new user to create account, press 1.\n");
//     printf("if your account the will already here,press 2.\n");
//     printf("if you diposit money,press 3.\n");
//     printf("if you want to widrawmoney press 4.\n");
//     printf("if you want to check balance press 5.\n");
// }
// void createaccount()
// {
//     printf("enter some basic information to create account.\n");
//     printf("\nabout privacy.\n");
//     printf("our system is totaly secure and safe to user.\n");
//     printf("for creation of account you face any issue to contact and inform to bank.\n");
//     printf("Enter user name :");
//     scanf("%s",&username);
//     printf("enter the user aadhar no :");
//     scanf("%d",&useraadhar);
//     printf("enter the user birth date.insure follow pattern (dd/mm/yyyy) : ");
//     scanf("%s",&userage);
//     printf("Enter father name :");
//     scanf("%s",&userfathername);
//     printf("if you want to make nomini (yes/no)?:");
//     scanf("%s",&usernomini);
//     if (usernomini=="no"){
//         printf("ok proceednext.\n");
    
//     }
//     else
//     {
//         printf("enter nomini name :");
//         scanf("%s",&nomininame);
//     }
//     printf("bank wil give to option for the for the account number.\n");
//     printf("first will bank  give a random  account number.\n");
//     printf("second will ber to choose you but notice that this account not availabe in this bank.\n");

    

// }



#include <stdio.h>
#include <string.h>

void menu();
void createaccount();

char username[500][500];
int useraadhar[1000];
char userage[1000][20];
char userfathername[1000][50];
char usernomini[1000][50];
char nomininame[1000][50];
char nonomini[] = "no available";
int i = 0; // Start index from 0

int main() {
    menu();
    createaccount();
    return 0;
}

void menu() {
    printf("\n.....Welcome.......\n");
    printf("\nProcessing....\n");
    printf("\nIf you're a new user, please follow the instructions.\n");
    printf("This software is entirely based on user choices and is easy to use.\n");
    printf("A guide will be provided based on your choices.\n");
    printf("Thank you for using our system.\n");
    printf("\nMenu:\n");
    printf("1. Create a new account\n");
    printf("2. Login to an existing account\n");
    printf("3. Deposit money\n");
    printf("4. Withdraw money\n");
    printf("5. Check balance\n");
}

void createaccount() {
    printf("\nEnter some basic information to create an account.\n");
    printf("\nPrivacy Notice:\n");
    printf("Our system is totally secure and safe for users.\n");
    printf("If you face any issues while creating your account, contact the bank.\n");

    printf("\nEnter username: ");
    scanf("%s", username[i]);

    printf("Enter Aadhar number: ");
    scanf("%d", &useraadhar[i]);

    printf("Enter date of birth (dd/mm/yyyy): ");
    scanf("%s", userage[i]);

    printf("Enter father's name: ");
    scanf("%s", userfathername[i]);

    printf("Do you want to add a nominee (yes/no)? ");
    scanf("%s", usernomini[i]);

    if (strcmp(usernomini[i], "no") == 0) {
        strcpy(nomininame[i], nonomini);
        printf("No nominee added. Proceeding...\n");
    } else {
        printf("Enter nominee's name: ");
        scanf("%s", nomininame[i]);
    }

    printf("\nThe bank will offer two options for account numbers:\n");
    printf("1. The bank assigns a random account number.\n");
    printf("2. You can choose your own (only if it is available).\n");

    i++; // Increment user index for next user
}
