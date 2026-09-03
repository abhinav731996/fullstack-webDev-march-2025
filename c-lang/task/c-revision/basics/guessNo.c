#include<stdio.h>

int main()
{
    int num;
    printf("please enter no. b/w 1-10: \n");
    scanf("%d ", &num);

    int flag = 0;

    for (int i = 1; i <= 10; i++)
    {
        if (i == num)
        {
            flag = 1;
            break;
        }
        
    }
    if (flag == 0 )
    {
        printf("Not matched!!!");
    }
    else{
        printf("Matched!!");
    }
    
    return 0;
}