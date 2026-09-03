#include <stdio.h>
int main()
{
    char name[5];
    int number[5];

    printf("Please enter character: ");

    for (int i = 0; i < 5; i++)
    {
        scanf(" %c", &name[i]);
    }
    
    printf("Please enter value: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &number[i]);
    }
    

    for (int i = 0; i < 5; i++)
    {
        printf("%c = %d\n", name[i], number[i]);
    }
    
    

    return 0;
}