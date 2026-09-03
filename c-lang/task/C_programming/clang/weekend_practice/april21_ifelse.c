// *********** Match the otp ***********

// #include<stdio.h>
// int main()
// {
//     int otp = 1223344;
//     int userotp;
//     printf("please enter otp: ");
//     scanf("%d", &userotp);
//     if (userotp == otp)
//     {
//         printf("Successful\n");
//     }
//     else
//     {
//         printf("Not matched\n");
//     }
    
    
//     return 0;
// }


// create a calculator



// *********** Calculate +,-,*,/ **************

// #include<stdio.h>
// int main()
// {
//     int option;
//     int firstnum;
//     int secondnum;
//     printf("Press 1 for addition: \n");
//     printf("Press 2 for subtraction: \n");
//     printf("Press 3 for multiplication: \n");
//     printf("Press 4 for division: \n");

//     printf("Please select any option: ");
//     scanf("%d", option);

//     printf("Please enter first number: ");
//     scanf("%d", firstnum);

//     printf("Please enter second number: ");
//     scanf("%d", secondnum);
    
//     if (option==1)
//     {
//         printf("%d\n", firstnum+secondnum);  
//     }
//     else if (option==2)
//     {
//         printf("%d\n", firstnum-secondnum);
//     }
//     else if (option==3)
//     {
//         printf("%d\n", firstnum*secondnum);
//     }
//     else if (option==4)
//     {
//         printf("%d\n", firstnum/secondnum);
//     }
//     else
//     {
//         printf("Please select valid option!!");
//     }
    
    

//     return 0;

// }


// *********** Positive & Negitave *********

// #include<stdio.h>
// int main()
// {
//     int number;
//     printf("Please enter any number: ");
//     scanf("%d", &number);

//     if (number>0)
//     {
//         printf("You enterd +ve number: %d\n", number);
//     }
//     else
//     {
//         printf("You enterd -ve number: %d\n", number);
//     }
    
    

//     return 0;
// }


// ******* even odd number between 0-100 ******

// #include<stdio.h>
// int main()
// {
//     int number;
//     printf("Please enter any number between 0-100: ");
//     scanf("%d", &number);
    
//     if (number>0 && number<100)
//     {
//         if (number%2==0)
//         {
//             printf("Even number %d\n", number);
//         }
//         else
//         {
//             printf("Odd number %d\n", number);
//         }
//     }
//     else
//     {
//         printf("Please enter valid number!!\n");
//     }
    
    

//     return 0;
// }


// ********** Squar & cube ************

// #include <stdio.h>
// int main()
// {
//     int number;
//     int option;
//     printf("Please enter any number: ");
//     scanf("%d", &number);

//     printf("Press 1 for cube & 2 for squar: ");
//     scanf("%d", &option);

//     if (option == 1)
//     {
//         printf("%d\n", number*number*number);
//     }
//     else if (option == 2)
//     {
//         printf("%d\n", number*number);
//     }
//     else
//     {
//         printf("please slect valid option: \n");
//     }
    
    
    
//     return 0;
// }


// Print Alternate Letters from a–z

#include<stdio.h>
int main()
{
    printf("Print Alternate Letters from a-z\n");
    
    for (char ch = 'a'; ch <= 'z'; ch+=2)
    {
        printf("%c\t", ch);
    }
    
    return 0;

}