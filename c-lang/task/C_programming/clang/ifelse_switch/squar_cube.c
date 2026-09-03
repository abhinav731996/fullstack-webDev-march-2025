// +++++++++++ Squar & Cube +++++++++++++++

#include<stdio.h>
int main()
{
    int num;
    printf("1 for squar: \n");
    printf("2 for cube: \n");
    int option;
    printf("Please select any option: ");
    scanf("%d",&option);

    if (option>0 && option<3)               //++++++ Important ++++++++++
    {
    printf("pleas enter any number: ");
    scanf("%d",&num);
    }

    if (option==1)
    {
        printf("%d squar is: %d\n", num, num*num);
    }
    else if (option==2)
    {
        printf("%d cube is: %d\n", num, num*num*num);
    }
    else
    {
        printf("please select valid option!!\n");
    }

    return 0;
}
