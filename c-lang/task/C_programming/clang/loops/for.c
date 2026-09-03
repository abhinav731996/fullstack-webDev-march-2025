// // ++++++++++++++++++++++ Important question ++++++++++++
// #include <stdio.h>
// int main()
// {
//     int num = 10;
//     num++;
//     printf("%d", num++);
//     printf("%d", num);
//     printf("%d", num);
//     return 0;
// }

// #include <stdio.h>

// int main()
// {
//     int num = 2;
//     // printf("enter any number: ");
//     // scanf("%d", &num);

//     for (int i = num; i < 10; i++)
//     {
//         printf("%d\n", i);
//     }

//     return 0;
// }



// // ++++++++++++++ get user input & create table ++++++++++++++

// #include <stdio.h>
// int main()
// {
//     int number;
//     printf("Enter any number: ");
//     scanf("%d", &number);

//     if (number > 0)
//     {
//         for (int abhinav = 1; abhinav <= 10; abhinav++)
//         {
//             printf("%d * %d = %d\n", number, abhinav, number * abhinav);
//         }
//     }
//     else
//     {
//         printf("please enter number greater then 'Zero'.\n");
//     }
//     return 0;
// }



// // ++++++++++++++ print a-z +++++++++++=

// #include <stdio.h>
// int main()
// {
//     for (char ch = 'a'; ch <= 'z'; ch++)
//     {
//         printf("%c \t", ch);
//     }

//     return 0;
// }



// +++++++++++ print a-z by getting user input ++++++++++

// #include <stdio.h>
// int main()
// {
//     char val;
//     printf("enter any aplhabet: ");
//     scanf("%c", &val);

//     if (val >= 'a' && val <= 'z')
//     {

//         for (char ch = val; ch <= 'z'; ch++)
//         {
//             printf("%c \t", ch);
//         }
//     }

//     else if (val >= 'A' && val <= 'Z')
//     {
//         for (char ch = val; ch <= 'Z'; ch++)
//         {
//             printf("%c \t", ch);
//         }
//     }
//     else
//     {
//         printf("Please enter a valid alphabets!!");
//     }

//     return 0;
// }


// **************** use of flag ***************

#include <stdio.h>

int main()
{
    int number;
    printf("Enter any number: ");
    scanf("%d", &number);
    int flag = 0;
    for (int i = 1; i <=10 ; i++)
    {
        if (i == number )
        {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
    {
        printf("Not matched!!");
    }
    else{
        printf("Matched!!");
    }
    
    
    return 0; 
}