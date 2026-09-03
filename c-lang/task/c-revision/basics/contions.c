#include <stdio.h>

int main(){
    printf("If/Else condition \n");

    int a = 342;
    int b = 332;

    if (a>b)
    {
        printf("a is greater then b\n");
    
    }else
    {
        printf("a is less then b\n");
    }

    // -----------------------------------------------------
    printf("\nBy using shorter hand \n");
    
    a>b ? printf("a is greater then b\n") : ("a is less then b\n");
    
    // -----------------------------------------------------
    printf("\nSwith Case\n");

    int day = 2;

    switch (day)
    {
        case 1:
        printf("Monday\n");
        break;

        case 2: 
        printf("Tuesday\n");
        break;

        case 3: 
        printf("Wednesday\n");
        break;

        default: 
        printf("other day\n");
        
    };
    
}