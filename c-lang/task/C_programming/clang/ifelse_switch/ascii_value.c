// +++++++++++++++ ASCII values  +++++++++++++++++

#include<stdio.h>
int main()
{
    int num;
    printf("Enter a number between 97-122: ");
    scanf("%d", &num);

    printf("the number which is %d is ASCII value of '%c'\n", num, num);

    return 0;
}
