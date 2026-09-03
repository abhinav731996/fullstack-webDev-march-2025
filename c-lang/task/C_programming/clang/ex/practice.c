
//++++++++++++ Ques-  3*x/y – z+k, where x=2, y=3, z=3, k=1 +++++++++++

// #include<stdio.h>
// int main()
// {
//     int x = 2;
//     int y = 3;
//     int z = 3;
//     int k = 1;

//     float cal = (3.0 * x / y)- (z+k);
//     printf("total = %f/n", cal);
//     return 0;
// }



// +++++++++++++ Use of scanf +++++++++++++++

// #include<stdio.h>
// int main()
// {
//     int myNum;
//     char myChar[200];

//     printf("enter one number & character\n");

//     scanf("%d %s", &myNum, &myChar);
//     printf("your number is %d\n", myNum);
//     printf("your character is %s\n", myChar);
//     return 0;
// }


// // ++++++++++ use of if/else ++++++++++++
// #include<stdio.h>
// int main (){

//     int age;
//     printf("please enter your age ");
//     scanf("%d", &age);

//     if (age>18)
//     {
//         printf("your are eligible %d\n", age);
//     }
//     else
//     {
//         printf("you are not eligible\n");
//     };

//     return 0;
// } 



// ++++++++++++++++ use of switch case ++++++++++

// #include<stdio.h>
// int main()
// {
//     int a;
//     printf("Please enter a number between 1-4: ");
//     scanf("%d", &a);
//     switch (a)
//     {
//     case 1:
//         printf("you enterd 1\n");
//         break;
//     case 2:
//         printf("you enterd 2\n");
//         break;
//     case 3:
//         printf("you enterd 3\n");
//         break;
//     case 4:
//         printf("you enterd 4\n");
//         break;
    
//     default:
//         printf("nothing match\n");
//         break;
//     }
//     return 0;
// }



//+++++++++++++ Grade system +++++++++++++++

// hindi, english, math = marks 
// 1st division = >60 
// 2nd division = >45, <60
// 3rd division = >33, <45
// sole this using switch case 

#include<stdio.h>
int main()
{

    int english;
    printf("Enter English marks: \n");
    scanf("%d", &english);
    
    int hindi;
    printf("Enter Hindi marks: \n");
    scanf("%d", &hindi);

    int math;
    printf("Enter Math marks: \n");
    scanf("%d", &math);

    int sum = english + hindi + math;
    printf("total = %d\n", sum);

    int average = sum/3;
    printf("Average: %d\n", average);

    if (average >= 65) 
    {
        printf("1st Division!!\n");
    }
    else if (average >= 50) {
        printf("2nd Division.\n");
    }
    else if (average >= 33) {
        printf("3rd Division.\n");
    }
    else {
        printf("Fail.\n");
    }

    return 0;
}

