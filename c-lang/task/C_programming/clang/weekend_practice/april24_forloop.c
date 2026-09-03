// ********* get 1-10 no. from user & use for loop **********

#include<stdio.h>
int main ()
{
    int num;
    printf("please enter number b/w 1-10: ");
    scanf("%d", &num);
    int flag = 0;

    for (int i = 1; i < 11; i++)
    {
        if (i == num)
        {
            flag = 1;
        }
    }
    if (flag == 0)
    {
        printf("not matched!!\n");
    }
    else
    {
        printf("matched!!\n");
    }
    
    
    return 0;
}