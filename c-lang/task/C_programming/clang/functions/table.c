// #include <stdio.h>

// void printTable(int num1);

// int main()
// {

//     for (int num1 = 1; num1 <=100; num1++)
//     {
//         printTable(num1);
//     }
    
//     return 0; 
// }
// void printTable(int num1)
// {
//     printf("Table of %d\n", num1);
//     for (int num2 = 1; num2 <= 10; num2++)
//         {
//             printf("%d * %d = %d\n",num1, num2,  num2 * num1);
//         }
//         printf("\n");
// }



#include <stdio.h>
void printTable();
int main()
{
    printTable();
    
    return 0; 
}

void printTable()
{
    for (int i = 1; i <= 100; i++)
    {
    printf("table of %d\n", i);
    for (int j = 1; j < 10; j++)
    {
    printf("%d * %d = %d\n", i, j, i*j);
    }
    printf("\n");
    } 
       
}

