#include<stdio.h>

int main(){
    int hindi = 70;
    int english = 75;
    int math = 88;

    float sum = hindi + english + math;
    float persent = (sum/300) * 100;
    
    printf("Total %%age = %.2f%%", persent);
    return 0;
}