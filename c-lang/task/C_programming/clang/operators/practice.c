// #include<stdio.h>
// int main ()
// {
//     printf("please enter the following result: \n");

//     int c;
//     printf("c: ");
//     scanf("%d", &c);

//     int python;
//     printf("Python: ");
//     scanf("%d", &python);
    
//     int javascript;
//     printf("Javascript: ");
//     scanf("%d", &javascript);
    
//     int react;
//     printf("React: ");
//     scanf("%d", &react);
    
//     int node;
//     printf("Node.js: ");
//     scanf("%d", &node);

//     if (c<70 || python<70 || javascript<70 || react<70 || node<70)
//     {
//         printf("Fail!!\n");
//     }
//     else{
//         printf("Pass!!\n");
//     }
    
    
//     return 0;
// }


#include <stdio.h>

int main()
{
    int num = 123456;
    int reversed = 0;

    // Reverse the number to print left to right
    int temp = num;
    while (temp > 0)
    {
        reversed = reversed * 10 + (temp % 10);
        temp /= 10;
    }

    // Print each digit from reversed number
    while (reversed > 0)
    {
        printf("%d\n", reversed % 10);
        reversed /= 10;
    }

    return 0;
}
