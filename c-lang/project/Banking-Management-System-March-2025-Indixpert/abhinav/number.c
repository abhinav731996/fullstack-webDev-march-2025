#include<stdio.h>
int main()
{
    int num;

    while (1)
    {
        printf("Enter a valid number: ");
        
        if (scanf("%d", &num) == 1)
        {
           break;
        }
        else
        {
            printf("Please enter a valid number!!\n");
            while (getchar() != '\n');
        }
        
    }
    printf("Number: %d\n", num);
    return 0;
}


// #include <stdio.h>

//     int num;
// int getValidNumber() {
//     while (1) {
//         printf("Enter a valid number: ");
//         if (scanf("%d", &num) == 1) {
//             return num;  // valid input
//         } else {
//             printf("Invalid input! Please enter only a number.\n");

//             // clear input buffer
//             while (getchar() != '\n');
//         }
//     }
// }

// int main() {
//     int number = getValidNumber();
//     printf("You entered: %d\n", number);
//     return 0;
// }


// #include <stdio.h>

// int id[5] = {101, 102, 103};          // sample account IDs
// int balance[5] = {500, 1000, 1500};   // sample balances
// int count = 3;                        // total accounts
// void deposit();
// int main()
// {
//     deposit();
//     return 0;
// }
// void deposit() {
//     int inputId, amt, found = 0;

//     while (1) {
//         printf("Enter Account ID to deposit into: ");
//         if (scanf("%d", &inputId) != 1) {
//             printf("Invalid input! Please enter a valid ID.\n");
//             while (getchar() != '\n'); // clear buffer
//             continue;
//         }

//         for (int i = 0; i < count; i++) {
//             if (id[i] == inputId) {
//                 found = 1;

//                 while (1) {
//                     printf("Enter amount to deposit (100, 200, 500 or multiple of them): ");
//                     if (scanf("%d", &amt) != 1) {
//                         printf("Invalid input! Please enter a number.\n");
//                         while (getchar() != '\n'); // clear buffer
//                         continue;
//                     }

//                     if (amt > 0 && (amt % 100 == 0 || amt % 200 == 0 || amt % 500 == 0)) {
//                         balance[i] += amt;
//                         printf("Deposited ₹%d successfully.\nNew Balance: ₹%d\n", amt, balance[i]);
//                         break;
//                     } else {
//                         printf("Invalid amount! Must be 100, 200, 500 or their multiples.\n");
//                     }
//                 }

//                 break;
//             }
//         }

//         if (!found) {
//             printf("Account not found!\n");
//         } else {
//             break; // exit after deposit
//         }
//     }
// }
