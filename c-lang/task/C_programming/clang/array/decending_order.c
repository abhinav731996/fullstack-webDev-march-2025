#include<stdio.h>
int main()
{
    int number[5];
    printf("please enter 5 number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &number[i]);
    }

    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (number[j]<number[j+1])
            {
                int temp = number[j];
                number[j] = number[j+1];
                number[j+1] = temp;
            }
            
        }
        
    }
    for (int i = 0; i < 5; i++)
    {
        printf(" %d ", number[i]);
    }
    
    
    return 0;
}