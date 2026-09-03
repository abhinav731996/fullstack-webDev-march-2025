#include<stdio.h>
int main()
{
    for (int num1 = 1; num1 <= 50; num1++)
    {
        for (int num2 = 1; num2 <= 10; num2++)
        {
            printf("%d * %d = %d \n", num2, num1, num2*num1);
        }
        printf("\n");
    }
    return 0;
    
}