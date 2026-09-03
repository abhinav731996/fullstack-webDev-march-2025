// #include <stdio.h>

// int main()
// {
//     char name[3][20];
//     int eng[3],hindi[3],math[3];
//     for (int i = 0; i < 3; i++)
//     {
//     printf("please enter student name: ");
//         scanf(" %[^\n]", &name[i]);

//         printf("please enter eng marks: ");
//         scanf("%d",&eng[i]);

//         printf("please enter hindi marks: ");
//         scanf("%d",&hindi[i]);

//         printf("please enter math marks: ");
//         scanf("%d",&math[i]);
//     }
//     printf("\n output\n");

//     for (int i = 0; i < 3; i++)
//     {
//         printf("Student name: %s\n", name[i]);
//         printf("English marks: %d  ", eng[i]);
//         printf("Hindi makrs: %d  ", hindi[i]);
//         printf("Math marks: %d  ", math[i]);
//         printf("\n");
//     }
    

    
//     return 0; 
// }


// #include <stdio.h>

// int main()
// {
//     char name[3][20];
//     int eng[4],hindi[4],math[4],science[4];
//     for (int i = 0; i < 3; i++)
//     {
//     printf("please enter student name: ");
//         scanf(" %[^\n]", &name[i]);

//         printf("please enter eng marks: ");
//         scanf("%d",&eng[i]);

//         printf("please enter hindi marks: ");
//         scanf("%d",&hindi[i]);

//         printf("please enter math marks: ");
//         scanf("%d",&math[i]);

//         printf("please enter science marks: ");
//         scanf("%d",&science[i]);
//     }
//     printf("\n output\n");

//     for (int i = 0; i < 3; i++)
//     {
//         printf("Student name: %s\n", name[i]);
//         printf("English marks: %d  ", eng[i]);
//         printf("Hindi makrs: %d  ", hindi[i]);
//         printf("Math marks: %d  ", math[i]);
//         printf("Math marks: %d  ", science[i]);
//         printf("\n");
//     }
    

    
//     return 0; 
// }



// #include <stdio.h>

// int main()
// {
//     char name[4][20];
//     int eng[2],hindi[2];
//     for (int i = 0; i < 4; i++)
//     {
//     printf("please enter student name: ");
//         scanf(" %[^\n]", &name[i]);

//         printf("please enter eng marks: ");
//         scanf("%d",&eng[i]);

//         printf("please enter hindi marks: ");
//         scanf("%d",&hindi[i]);

//     }
//     printf("\n output\n");

//     for (int i = 0; i < 4; i++)
//     {
//         printf("Student name: %s\n", name[i]);
//         printf("English marks: %d  ", eng[i]);
//         printf("Hindi makrs: %d  ", hindi[i]);
//         printf("\n");
//     }
    

    
//     return 0; 
// }


#include <stdio.h>

int main()
{
    char name[3][20];
    int eng[1], hindi[1], math[1], science[1];
    for (int i = 0; i < 3; i++)
    {
        printf("Please enter student name: ");
        scanf(" %[^\n]", name[i]);

        printf("please enter eng marks: ");
        scanf("%d",&eng[i]);

        printf("please enter hindi marks: ");
        scanf("%d",&hindi[i]);

        printf("please enter math marks: ");
        scanf("%d",&math[i]);

        printf("please enter science marks: ");
        scanf("%d",&science[i]);
    }
    printf("\nOutput\n");
    for (int i = 0; i < 3; i++)
    {
        printf("Name: %s\n", name[i]);
        printf("English: %d", eng[i]);
        printf("Hindi: %d", hindi[i]);
        printf("Math: %d", math[i]);
        printf("Science: %d", science[i]);
        printf("\n");
    }
    
    return 0; 
}