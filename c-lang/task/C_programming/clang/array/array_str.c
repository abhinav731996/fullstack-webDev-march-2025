
// #include<stdio.h>
// #include<string.h>

// int main()
// {
//     char bookname[40];
//     char copyname[40];
//     printf("please enter book name: ");
//     scanf(" %[^\n]", &bookname);

//     printf("length of this book is: %d\n", strlen(bookname));

//     strcpy(copyname, bookname);
//     printf("copies name: %s\n", copyname);
//     return 0;
// }


// ************ Library stystem *********

#include<stdio.h>
#include<string.h>
int main()
{
    char bookname[3][50];
    char abhinav[2][50];
    char aditya[50];

    printf("please enter 3 book name: ");
    for (int i = 0; i < 3; i++)
    {
        scanf(" %[^\n]", &bookname[i]);
    }
    for (int i = 0; i < 3; i++)
    {
        if (i>1)
        {
            strcpy(aditya,bookname[i]);
        }
        else
        {
            strcpy(abhinav[i],bookname[i]);
        }
        
        
    }
    printf("\noutput\n");

    
    for (int i = 0; i < 2; i++)
    {
        printf("Abhinav:  %s ", abhinav[i]);
    }
    printf("\n");

    printf("Aditya: %s\n", aditya);
    

    return 0;
}