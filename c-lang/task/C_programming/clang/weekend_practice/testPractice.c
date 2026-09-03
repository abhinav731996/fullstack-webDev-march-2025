// ********* add two number *********

// #include<stdio.h>
// int main()
// {
//     int num1 = 140;
//     int num2 = 120;

//     printf("%d + %d = %d\n", num1, num2, num1+num2);

//     return 0;
// }



// ********* get average of 3 subjects ********

// #include <stdio.h>

// int main()
// {
//     int eng = 75;
//     int math = 68;
//     int hindi = 83;

//     int sum = eng + math + hindi;
//     float average = (float) sum/3;
//     printf("total = %d \n average = %2.f%%\n", sum, average);
//     return 0; 
// }


// ******* get user mobile number ********

// #include <stdio.h>

// int main()
// {
//     long long int mobileNo;

//     printf("Enter your mobile number: ");
//     scanf("%lld", &mobileNo);

//     printf("Your mobile number: %lld\n", mobileNo);
//     return 0; 
// }



// ****** get number from user & print table ******

// #include <stdio.h>

// int main()
// {
//     int table;

//     printf("please enter any number: ");
//     scanf("%d", &table);

//     printf("Your table: \n");

//     for (int i = 1; i < 11; i++)
//     {
//     printf("%d * %d = %d\n", table, i, table*i);
        
//     }
    
//     return 0; 
// }


// ****** even odd number ******

// #include <stdio.h>

// int main()
// {
//     int num;


//     while (1)
//     {
        
//     printf("please enter any number :");
//     if (scanf("%d", &num) != 1)
//     {
//         printf("please enter number only\n");
//         while(getchar()!= '\n');
//         continue;
        
//     }
    
    
//     if (num%2 == 0) 
//     {
//         printf("Even number\n");
//         break;
//     }
//     else
//     {
//         printf("Odd number try again!!\n");
        
//     }
    
//     }
//     return 0; 
// }


// ***** calculator +, -, /, * ******

// #include <stdio.h>

// int main()
// {
//     int num1;
//     int num2;
//     int choice;

//     while (1)
//     {

//     printf("\n----Menu----\n");
//     printf("Press 1 for Addition\n");
//     printf("Press 2 for Subtraction\n");
//     printf("Press 3 for Divide\n");
//     printf("Press 4 for Multiply\n");

//     printf("\nEnter 1st number: ");
//     if (scanf("%d", &num1) !=1)
//     {
//         printf("\ninvalid input Please try again using number only\n");
//         while(getchar()!='\n');
//         continue;
//     }

//     printf("Enter your choice: ");
//     if(scanf("%d", &choice) !=1)
//     {
//         printf("\ninvalid input Please try again using number only\n");
//         while(getchar()!='\n');
//         continue;
//     }

//    printf("\nEnter 2nd number: ");
//     if (scanf("%d", &num2) !=1)
//     {
//         printf("\ninvalid input Please try again using number only\n");
//         while(getchar()!='\n');
//         continue;
//     }
//     switch (choice)
//     {
//     case 1:
//         printf("Sum of your number: %d\n", num1+num2);
//         break;
//     case 2:
//         printf("Sub of your number: %d\n", num1-num2);
//         break;
//     case 3:
//         printf("Div. of your number: %d\n", num1/num2);
//         break;
//     case 4:
//         printf("Mult. of your number: %d\n", num1*num2);
//         break;
    
//     default:
//         break;
//     }
//     }
//     return 0; 
// }



// ***** alternative a to z *****

// #include <stdio.h>

// int main()
// {

//     for (char i = 'a'; i <= 'z'; i+= 2)
//     {
//         printf("%c \t",i);
        
//     }
    
//     return 0; 
// }

 
// create structure
//  *      *
//   *    *
//    *  *
//     *  

// #include <stdio.h>

// int main()
// {
//     int num = 4;
    
//     for (int i = 0; i < num; i++)
//     {
//         for (int space = 0; space < i; space++)
//         {
//             printf(" ");
//         }
//         printf("*");
//         for (int space2 = 0; space2 < 2*(num-i-1); space2++)
//         {
//             printf(" ");
//         }
//         if (i !=num)
//         {
//             printf("*");
//         }
        
//         printf("\n");
//     }
    
//     return 0; 
// }




// #include <stdio.h>

// int stringLength(char str[]) {
//     int length = 0;

//     // Loop until null character '\0' is found
//     while (str[length] != '\0') {
//         length++;
//     }

//     return length;
// }

// int main() {
//     char name[] = "Abhinav Sharma";
    
//     int len = stringLength(name);

//     printf("Length of the string \"%s\" is: %d\n", name, len);

//     return 0;
// }


#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Abhinav Sharma";

    int len = strlen(name);
    printf("Length of the string is: %d\n", len);

    return 0;
}


// #include <stdio.h>

// int main()
// {
//     int i = 9;
//     i--;
//     --i;
//     i +=90;
//     printf("output %d", i);
//     return 0; 
// }


