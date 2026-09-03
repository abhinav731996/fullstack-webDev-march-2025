// #include<stdio.h>
// int main()
// {
//     int a;
//     printf("Please enter a number between 1-4: ");
//     scanf("%d", &a);
//     switch (a)
//     {
//     case 1:
//         printf("you enterd 1\n");
//         break;
//     case 2:
//         printf("you enterd 2\n");
//         break;
//     case 3:
//         printf("you enterd 3\n");
//         break;
//     case 4:
//         printf("you enterd 4\n");
//         break;
    
//     default:
//         printf("nothing match\n");
//         break;
//     }
//     return 0;
// }


// +++++++++++++ print week days +++++++++++++++++

#include<stdio.h>
int main()
{
    int number;
    printf("please enter a number b/w 1-7: ");
    scanf("%d", &number);

    if (number>0 && number<8)
    {
        switch (number)
        {
        case 1:
            printf("Monday\n");
            break;
        case 2:
            printf("Tuesday\n");
            break;
        case 3:
            printf("Wednesday\n");
            break;
        case 4:
            printf("Thursday\n");
            break;
        case 5:
            printf("Friday\n");
            break;
        case 6:
            printf("Saturday\n");
            break;
        case 7:
            printf("Sunday\n");
            break;
        
        default:
            break;
        }
    }
    else
    {
        printf("please enter a number b/w 1-7!!");
    }
    


    return 0;
}