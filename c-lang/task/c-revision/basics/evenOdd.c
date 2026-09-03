#include <stdio.h>

int main()
{
    int num;

    printf("Enter your number: ");
    scanf("%d", &num);

    if (num > 0 && num < 100)
    {
        if (num % 2 == 0)
        {
            printf("Your number is even");
        }
        else
        {
            printf("Your number is odd");
        }
    }
    else
    {
        printf("Number should be between 1 and 99");
    }

    return 0;
}