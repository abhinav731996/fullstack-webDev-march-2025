#include <stdio.h>

int even_odd(int a);

int main()
{
    int num;
    printf("please enter any number: ");
    scanf("%d", &num);
    even_odd(num);
    return 0; 
}

int even_odd(int a)
{
    if (a%2==0)
    {
        printf("your number is even!!");
    }
    else{
        printf("your number is odd!!");
    }
    
}