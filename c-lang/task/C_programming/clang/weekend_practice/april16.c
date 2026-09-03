// get user mobile number 

// #include<stdio.h>
// int main()
// {
//     long long int mobileNum;            // use long long int 
//     printf("Please enter your mobile number: ");
//     scanf("%lld", &mobileNum);
//     printf("your mobile number = %lld\n", mobileNum);
//     return 0;
// }



// get the user input marks & cal. %age & give them grade 

// #include<stdio.h>
// int main()
// {
//     printf("please enter subjets marks: \n");

//     int eng;
//     printf("English: ");
//     scanf("%d", &eng);

//     int math;
//     printf("Math: ");
//     scanf("%d", &math);

//     int hindi;
//     printf("Hindi: ");
//     scanf("%d", &hindi);

//     int sum = eng + math + hindi;
//     int average = sum/3.0;

//     printf("The average is: %d\n", average);

//     int grade = average/10;
//     printf("Grade is: %d", grade);
//     return 0;

// }


//get any number from user & create table

#include<stdio.h>
int main()
{
    int num;
    printf("Please enter any number: ");
    scanf("%d", &num);

    printf("your table is: \n");
    printf("%d * 1 = %d\n", num, num*1);
    printf("%d * 2 = %d\n", num, num*2);
    printf("%d * 3 = %d\n", num, num*3);
    printf("%d * 4 = %d\n", num, num*4);
    printf("%d * 5 = %d\n", num, num*5);
    printf("%d * 6 = %d\n", num, num*6);
    printf("%d * 7 = %d\n", num, num*7);
    printf("%d * 8 = %d\n", num, num*8);
    printf("%d * 9 = %d\n", num, num*9);
    printf("%d * 10 = %d\n", num, num*10);

    return 0;
}