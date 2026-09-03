// +++++++++++  fiond +ve & -ve number ++++++++++

#include<stdio.h>
int main()
{
    int userInput;
    printf("please enter any number: ");
    scanf("%d", &userInput);

    if (userInput>0)
    {
        printf("The number is positive\n");
    }
    else if (userInput<0)
    {
        printf("The number is negitive\n");
    }
    else{
        printf("Number is zero");
    }
    
    return 0;
}
