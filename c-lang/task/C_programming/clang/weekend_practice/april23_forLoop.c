// #include<stdio.h>
// int main()
// {
//     int number;
//     printf("enter a number: ");
//     scanf("%d", &number);
//     for (int i = number; i < 10; i++)
//     {
//         printf("%d\n", i);
//     }
    
//     return 0;
// }


// ************** print table ****************

// #include<stdio.h>
// int main()
// {
//     int num;
//     printf("Please enter any number: ");
//     scanf("%d", &num);

//     if (num>0)
//     {
//         for (int i = 1; i < 11; i++)
//         {
//             printf("%d * %d = %d\n",num,i,num*i);
//         }
        
//     }
//     else
//     {
//         printf("please enter positive value!!\n");
//     }
    
    
//     return 0;
// }


// ********* print character ***********

// #include<stdio.h>
// int main()
// {
//     for (char ch = 'a'; ch <= 'z'; ch++)
//     {
//         printf(" %c\t", ch);
//     }
    
//     return 0;
// }


// ********* print character by user ***********

// #include<stdio.h>
// int main()
// {
//     char cr;
//     printf("please enter any character: ");
//     scanf(" %c", &cr);

//     for (char ch = cr; ch <= 'z'; ch++)
//     {
//         printf("%c\t", ch);
//     }
    
//     return 0;
// }


// *********** print alternative character ********
#include<stdio.h>
int main()
{
    char val;
    printf("Please enter any character: ");
    scanf(" %c", &val);

    for (char i = val; i <= 'z'; i+=2)
    {
        printf("%c\n", i);
    }
    
    return 0;
}