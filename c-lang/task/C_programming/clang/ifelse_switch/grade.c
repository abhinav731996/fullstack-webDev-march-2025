//+++++++++++ Grade division +++++++++++++++
// hindi, english, math = marks 
// 1st division = >60 
// 2nd division = >45, <60
// 3rd division = >33, <45
// sole this using switch case 

// #include<stdio.h>
// int main()
// {

//     int english;
//     printf("Enter English marks: \n");
//     scanf("%d", &english);
    
//     int hindi;
//     printf("Enter Hindi marks: \n");
//     scanf("%d", &hindi);

//     int math;
//     printf("Enter Math marks: \n");
//     scanf("%d", &math);

//     int sum = english + hindi + math;
//     printf("total = %d\n", sum);

//     int average = sum/3;
//     printf("Average: %d\n", average);




    //++++++ Case-1 ++++++
    // if (average >= 65) 
    // {
    //     printf("1st Division!!\n");
    // }
    // else if (average >= 45) {
    //     printf("2nd Division.\n");
    // }
    // else if (average >= 33) {
    //     printf("3rd Division.\n");
    // }
    // else {
    //     printf("Fail.\n");
    // }
    
    //+++++++++ Case-2 +++++++++
    // switch (average/10)
    // {
    // case 10:
    // case 9 :
    // case 8 :
    // case 7 :
    // case 6 :
    //     printf("1st division");
    //     break;
    // case 5 :
    //     printf("2nd division");
    //     break;
    // case 4 :
    // case 3 :
    //     printf("3rd division");
    // break;
    // default:
    //     printf("You are fail!!");
    //     break;
    // }

    // ++++++++++ Case-3 ++++++++++++
    // if (average>=60)
    // {
    //     switch (average/10)
    // {
    // case 10:
    // case 9 :
    // case 8 :
    // case 7 :
    // case 6 :
    //     printf("1st division");
    //     break;
    // }
    // }
    // else if (average >= 45 && average<60) {
    //     printf("2nd Division.\n");
    // }
    // else if (average >= 33 && average<45) {
    //     printf("3rd Division.\n");
    // }
    // else {
    //     printf("Fail!!\n");
    // }
    
//     return 0;
// }



 //++++++++++++++++++ Case-4 ++++++++++++++++

//  #include<stdio.h>
//  int main()
//  {
//     int hindi, english, math;
//     float percentage;
//     int division;

//     printf("Enter Hindi marks: ");
//     scanf("%d",&hindi);
    
//     printf("Enter English marks: ");
//     scanf("%d",&english);
    
//     printf("Enter Math marks: ");
//     scanf("%d",&math);

//     percentage = (hindi+english+math)/3.0;

//     printf("Percentage: %.2f \n", percentage);

//     if (percentage>=60)
//     {
//         division = 1;
//     }
//     else if (percentage>=45 && percentage<=60)
//     {
//         division = 2;
//     }
//     else if (percentage>=33 && percentage<=45)
//     {
//         division = 3;
//     }
//     else{
//         division = 4;
//     }

//     switch (division)
//     {
//     case 1:
//         printf("First division \n");
//         break;
//     case 2:
//         printf("Second division \n");
//         break;
//     case 3:
//         printf("Third division \n");
//         break;
//     case 4:
//         printf("Fail!!");
//         break;
    
//     default:
//         break;
//     }
    
    
//     return 0;
//  }



// +++++++++++++++++++ Grade +++++++++++++++++++

#include<stdio.h>
int main()
{
    int result;
    printf("Please enter result: ");
    scanf("%d", &result);
    if (result<=100 && result>=90)
    {
        printf("Grade: A\n");
    }
    else if (result<=90 && result>=80)
    {
        printf("Grade: B\n");
    }
    else if (result<=80 && result>=70)
    {
        printf("Grade: C\n");
    }
    else if (result<=70 && result>=60)
    {
        printf("Grade: D\n");
    }
    else if (result<=60 && result>=50)
    {
        printf("Grade: E\n");
    }
    else{
        printf("Your are fail!!\n");
    }
    

    return 0;
}
