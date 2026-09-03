// #include<stdio.h>
// int main()
// {
//     int number[5] = {1,2,3,4,5};
//     int temp;
//     temp = number[0];
//     number[0] = number[1];
//     number[1] = temp;

//     for (int i = 0; i < 5; i++)
//     {
//         printf("%d\n", number[i]); 
//     }
    
//     return 0;
// }


#include<stdio.h>
int main()
{
    int number[5] = {1,2,3,4,5};
    int one;

    one = number[0];
    number[0] = number[4];
    number[4] = one;

    int two;

    two = number[1];
    number[1] = number[3];
    number[3] = two;
    
    for (int i = 0; i < 5; i++)
    {
        printf("%d\n", number[i]);
    }
    
    return 0;
}