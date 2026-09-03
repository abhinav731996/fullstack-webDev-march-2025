// ++++++++++++++++ Tax calculation ++++++++++++++++
//                   Income Slab Tax
//                   2.5 - 5.0L 5%
//                   5.0L - 10.0L 20%
//                   Above 10.0L 30%

#include<stdio.h>
int main()
{
    int income;
    float tax = 0;
    printf("Please enter your income: ");
    scanf("%d", &income);
    if (income<=250000) 
    {
        tax = 0;
    }
    else if (income>250000 && income<=500000)
    {
        tax = (income - 250000) * 0.05;
    }
    else if (income>500000 && income<=1000000)
    {
        tax = (500000 - 250000) * 0.05 + 0.2 * (income - 500000);
    }
    else{
        tax = (500000 - 250000) * 0.05 + 0.2 * (1000000 - 500000) + 0.3 * (income - 1000000);
    }
    
    printf("the total tax you need to pay %.2f\n", tax);
    
    return 0; 
}
