#include<stdio.h>
int main()
{
    int number[5];
    int count = 0;
    int input;

    printf("please enter 5 even number: \n");

    while (count<5)
    {
        printf("Enter even number!!\n");
        scanf("%d", &input);

        if (input%2 == 0)
        {
            number[count] = input;
            count++;
        }
        else
        {
            printf("The number is odd Please try again!!\n");
        }

        
    }
        printf("\nYour 5 even numbers are: \n");

        for (int i = 0; i < 5; i++)
        {
            printf("%d\n", number[i]);
        }
    
    return 0;
}