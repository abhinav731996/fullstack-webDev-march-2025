// #include<stdio.h>
// int main()
// {
//     int i =0;
//     while (i<10)
//     {
//         printf("the value of i is %d\n",i);
//         i++;
//     }
    
//     return 0;
// }


// Write a program to print natural numbers from 10 to 20 when initial loop counter is initialized to 0.
// The loop counter need not be int, it can be float as well.

// #include <stdio.h>
// int main()
// {
//     int i=0;
//     while (i<=20)
//     {
//         if (i>=10)
//         {
//             printf("the value of i is %d\n", i);
//         }
//         i++;
//     }
    
//     return 0; 
// } 

// +++++++++++++++++ Practice ++++++++++++++++++++++

// #include <stdio.h>

// int main()
// {
    
//     int anynumber;
//     while (1)
//     {
//     printf("Please enter any number: ");
//     scanf("%d", &anynumber);
//         if (anynumber==0)
//         {
//         break;
//         }
        
//     }
    
//     return 0; 
// }



// +++++++++++++++++++++++ Get Vowels +++++++++++++++++++
#include <stdio.h>

int main() {
    char ch;
    int flag = 1;
    while (flag>0) {
        printf("Please enter any character: ");
        scanf(" %c", &ch);

        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                printf("You entered a vowel. Exiting...\n");
                flag = 0; 
                break;
            
            default:
                printf("Not a vowel. Try again.\n");
                break;
        }
    }

    return 0;
}
