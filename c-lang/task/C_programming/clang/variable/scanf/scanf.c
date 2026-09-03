// #include<stdio.h>
// int main()
// {
//     int hindi;
//     int english;
//     int math;
//     int science;
//     char grade[5];

//     printf("please enter marks of hindi: ");
//     scanf("%d", &hindi);

//     printf("please enter marks of english: ");
//     scanf("%d", &english);

//     printf("please enter marks of math: ");
//     scanf("%d", &math);

//     printf("please enter marks of science: ");
//     scanf("%d", &science);

//     printf("please enter grade: ");
//     scanf("%s", &grade);

//     printf("Marks in hindi is: %d\n", hindi);
//     printf("Marks in english is: %d\n", english);
//     printf("Marks in math is: %d\n", math);
//     printf("Marks in science is: %d\n", science);

//     int sum = hindi + english + math +science;
//     float avg = (sum/400.0) * 100;
//     printf("YOUR TOTAL AVERAGE IS = %.2f%%\n", avg);
//     printf("YOUR GRADE IS: %s\n", grade);

//     return 0;
// }

// #include<stdio.h>
// int main()
// {
//     int num;
//     printf("please enter any number: ");
//     scanf("%d", &num);

//     printf("your number table: \n");
//     printf("%d \n",num * 1);
//     printf("%d \n",num * 2);
//     printf("%d \n",num * 3);
//     printf("%d \n",num * 4);
//     printf("%d \n",num * 5);
//     printf("%d \n",num * 6);
//     printf("%d \n",num * 7);
//     printf("%d \n",num * 8);
//     printf("%d \n",num * 9);
//     printf("%d \n",num * 10);


//     return 0;
// }

#include<stdio.h>
int main()
{
    int num;
    printf("please enter any number: ");
    scanf("%d", &num);

    printf("your number table: \n");
    printf(" %d \n %d \n %d \n %d \n %d \n %d \n %d \n %d \n %d \n %d \n",num * 1, num * 2, num * 3, num * 4, num * 5, num * 6, num * 7, num * 8, num * 9, num * 10);


    return 0;
}


