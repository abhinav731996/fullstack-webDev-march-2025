#include <stdio.h>

int main()
{
    int  number;
    int rent = 10000;

    printf("Please enter amount for this month: ");
    scanf("%d",&number);

    if (number == rent)
    {
        printf("Paid %d\n", number);
    }
    else
    {
        printf("please enter correct amount");
    }
    
    return 0; 
}