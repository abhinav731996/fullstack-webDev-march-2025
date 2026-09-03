// #include <stdio.h>

// int main()
// {
//     int num[5];
//         printf("please enter 5 number: \n");

//     for (int i = 0; i < 5; i++)
//     {
//         scanf("%d", &num[i]);
//     }
//     printf("Output: ");
//     for (int i = 0; i < 5; i++)
//     {
//         printf("%d\t", num[i]);
//     }
    

//     return 0; 
// }


// #include <stdio.h>

// int main()
// {
//     char name[7] = "Abhinav";
//     printf("%s", name);
//     return 0; 
// }

// #include <stdio.h>

// int main()
// {
//     int vowels[5];
//     printf("please enter vowels: ");

//     for (int i = 0; i < 5; i++)
//     {
//         scanf(" %c", &vowels[i]);
//     }
    
//     printf("****Output*****");

//     for (int i = 0; i < 5; i++)
//     {
//         printf("%c", vowels);
//     }
    
//     return 0; 
// }

// #include <stdio.h>

// int main()
// {
//     int number[5] = {1,2,3,4,5};
//     printf("%d", number[0]);
//     return 0; 
// }

#include<stdio.h>
int main()
{
    char name[7];
    printf("please enter your name: ");
    scanf("%s",name);

    printf("output\n");

    printf("%s\n", name);
    return 0;
}