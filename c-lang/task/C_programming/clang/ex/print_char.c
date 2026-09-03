
// #include<stdio.h>   
// int main()
// {
//     char ch;

//     for (ch = 'a'; ch <= 'z'; ch++)
//     {
//         printf("%c\t ", ch);
//     }
    

//     return 0;
// }



// ******** Alternate Letters from a-z *********

#include<stdio.h>
int main()
{
    printf("Print Alternate Letters from a-z\n");
    
    for (char ch = 'a'; ch <= 'z'; ch+=2)
    {
        printf("%c\t", ch);
    }
    
    return 0;

}