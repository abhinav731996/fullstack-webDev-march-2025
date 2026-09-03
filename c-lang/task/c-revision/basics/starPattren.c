// #include<stdio.h>

// int main()
// {
//     int row = 4;

//     for (int rowHt = 0; rowHt < row; rowHt++)
//     {
//         for (int spaceSide = 0; spaceSide < rowHt; spaceSide++)
//         {
//             printf(" ");
//         }
//         printf("*");
//         for (int spaceMd = 0; spaceMd < 2*(row - rowHt - 1); spaceMd++)
//         {
//             printf(" ");
//         }
//         if (rowHt != row)
//         {
//             printf("*");
//         }
//         printf("\n");
        
//     }
    
//     return 0;
    
// }





#include<stdio.h>

int main()
{
    int row = 4;

    for(int rowHt=0; rowHt<row; rowHt++)
    {
        for(int spaceSide=0; spaceSide<rowHt; spaceSide++)
            printf(" ");

        printf("*");

        for(int spaceMd=0; spaceMd<2*(row-rowHt-1); spaceMd++)
            printf(" ");

        if(rowHt != row-1)
            printf("*");

        printf("\n");
    }

    return 0;
} 