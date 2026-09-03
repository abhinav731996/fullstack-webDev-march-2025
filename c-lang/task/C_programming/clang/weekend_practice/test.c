#include <stdio.h>

int main()
{
    int number[8] = {1,5,3,7,10,2,1,3};
    int num = 8;
    for (int i = 0; i < num-1; i++)
    {
        for (int j = 0; j < num-i-1; j++)
        {
            if (number[j]>number[j+1])
            {
                int temp = number[j];
                number[j] = number[j+1];
                number[j+1] = temp;
            }
            
        }
        
    }
    for (int i = 0; i < 8; i++)
    {
        printf(" %d ", number[i]);
    }
    
    return 0; 
}