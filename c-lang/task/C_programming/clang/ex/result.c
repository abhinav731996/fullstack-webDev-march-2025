// +++++++++++++++ Student pass or fail +++++++++++++

#include<stdio.h>
int main()
{
    int marks1, marks2, marks3;
    printf("Enter marks1: \n");
    scanf("%d", &marks1);
    
    printf("Enter marks2: \n");
    scanf("%d", &marks2);
    
    printf("Enter marks3: \n");
    scanf("%d", &marks3);

    if (marks1<33 || marks2<33 || marks3<33)
    {
        printf("you are failed due to less marks in individual!!\n");
    }
    else if ((marks1+marks2+marks3)/3 <40)
    {
        printf("you are fail due to less percentge\n");
    }
    else
    {
        printf("you are pass!!\n");
    }    

    return 0;
}