// +++++++++++++++++++ Cal. (-, +, *, /) ++++++++++++++++++

#include<stdio.h>
int main ()
{
    int num1;
    printf("enter 1st numer: ");
    scanf("%d", &num1);
    
    char operator;
    printf("enter any operation(-, +, *, /): ");
    scanf(" %c", &operator);                       // why do we add space before %c?

    int num2;
    printf("enter 2nd numer: ");
    scanf("%d", &num2);

    if (operator=='-')  
    {
        int sub = num1 - num2;
        printf("%d - %d = %d\n", num1, num2, sub);
    }
    else if (operator == '+')
    {
        int sum = num1 + num2;
        printf("%d + %d = %d\n", num1, num2, sum);
    }
    else if (operator == '/')
    {
        float div = (float)num1 / num2;
        printf("%d / %d = %.2f\n", num1, num2, div);
    }
    else if (operator == '*')
    {
        int mult = num1 * num2;
        printf("%d * %d = %d\n", num1, num2, mult);
    }
    else
    {
        printf("Please enter valid operation!!\n");
    }
    
    return 0;
}
