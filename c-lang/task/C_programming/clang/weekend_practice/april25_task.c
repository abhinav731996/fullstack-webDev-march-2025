// ********* create table in c of first 50 numbers using loop *********

// #include<stdio.h>
// int main()
// {
    
//     for (int i = 1; i <= 50; i++)
//     {
//         for (int j = 1; j <= 10; j++)
//         {
//         printf("%d * %d = %d\n", i, j, i*j);
//         }
//         printf("\n");
//     }
    
//     return 0;
// 


// ********* create structure using for loop ************
// *      *
//  *    *
//   *  * 
//    **

//     1 - 4 rows
//     2 - landing space inceases row by row (0,1,2,3)
//     3 - print *
//     4 - middle space decreases rwo by row (6,4,2,0)
//     5 - another *.

#include <stdio.h>

int main()
{
    int num = 4;

    for (int i = 0; i < num; i++)
    {
        for (int space = 0; space < i; space++)
        {
            printf(" ");
        }
        printf("*");
        
        for (int space = 0; space < 2*(num-i-1); space++)
        {
            printf(" ");
        }
        if (i !=num)
        {
            printf("*");
        }
        
        printf("\n");
    }
    
    return 0; 
}
