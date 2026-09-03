// #include<stdio.h>
// int main()
// {
//     int num[] = {23, 44, 55, 33, 76, 88, 18, 55};

//     int length = sizeof(num)/sizeof(num[0]);
    
//     int lowestNum = num[0];

//     for (int i = 0; i < length; i++)
//     {
//         if (lowestNum>num[i])
//         {
//             lowestNum = num[i];
//         }
        
//     }
//     printf("The lowest number = %d\n", lowestNum);
    
//     return 0;
// }


#include <stdio.h>

int main()
{
    char name[5];
    int num[5];

    printf("Please enter 5 character: ");

    for (int i = 0; i < 5; i++)
    {
        scanf(" %c", &name[i]);
    }
    printf("Please enter 5 values: ");

    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }

    printf("output:");
    
    for (int i = 0; i < 5; i++)
    {
        printf("%c = %d\n", name[i], num[i]);
    }
    
    
    
    return 0; 
}