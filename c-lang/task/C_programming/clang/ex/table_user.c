// ++++++++++++++ get user input & create table ++++++++++++++

#include<stdio.h>
int main()
{
    int number;
    printf("Enter any number: ");
    scanf("%d", &number);

    if (number>0)
    {
        for (int abhinav = 1; abhinav <=10; abhinav++)
        {
          printf("%d * %d = %d\n",number,abhinav, number * abhinav);  
        }
        
    }
    else{
        printf("please enter number greater then 'Zero'.\n");
    }
    return 0;
}