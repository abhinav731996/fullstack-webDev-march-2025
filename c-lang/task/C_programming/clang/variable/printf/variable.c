//+++++++++ EX-1 (+, /, *, -) ++++++++++++

// #include <stdio.h>

// int main()
// {
//     // printf("Hello, Abhinav! \n");
//     // int number1 = 20;
//     // int number2 = 10;
//     // int number;
//     // int sum = number1 + number2;
//     // int sub = number1 - number2;
//     // int div = number1 / number2;
//     // int mult = number1 * number2;

//     // printf("randomNumber(%d) \n", number);
//     // printf("%d + %d = %d \n", number1, number2, sum);
//     // printf("%d - %d = %d\n", number1, number2, sub);
//     // printf("%d / %d = %d\n", number1, number2, div);
//     // printf("%d * %d = %d\n", number1, number2, mult);
//     // printf("firstNumber(%d) * secondNumer(%d) = output(%d)\n", number1, number2, mult);



// ++++++++++++ EX-2 (data types & variable)

//     char name[10] = "Abhinav";
//     int class = 7;
//     int age = 11;
//     char grade = 'A';
//     float percentage = 92.55;
//     double longitude = 28.53196;
//     double latitude = 76.36272;

//     printf("Name: %s \n", name);
//     printf("Class: %d \n", class);
//     printf("Age: %d \n", age);
//     printf("Grade: %c \n", grade);
//     printf("Persent: %.2f \n", percentage);
//     printf("Longitude: %lf \n", longitude);
//     printf("Latitude: %lf \n", latitude);

//     return 0;
//     getchar();
// }



// +++++++++++ Ex-3 (persentage) +++++++++++

// #include<stdio.h>
// int main()
// {
//     int hindi = 100;
//     int english = 100;
//     int math = 100;
//     int sum = hindi + english + math;
//     float pers = (sum/300.0) * 100;
//     printf ("Total persentage = %.2f%%\n", pers);
//     return 0; 
// }



//+++++++++ Ex-4 (vowels) ++++++++++++

// #include<stdio.h>
// int main()
// {
//     char a = 'A';
//     char e = 'E';
//     char i = 'I';
//     char o = 'O';
//     char u = 'U';

//     printf("Vowel: %c\n",a);
//     printf("Vowel: %c\n",e);
//     printf("Vowel: %c\n",i);
//     printf("Vowel: %c\n",o);
//     printf("Vowel: %c\n",u);

//     return 0;
// }



// +++++++++ Ex-5 (Creat structure) ++++++

// #include <stdio.h>

// int main() {
//     char first[20] = "////\\\\\\\\";
//     char second[20] = " ///\\\\\\";
//     char third[20] = "  //\\\\";
//     char four[20] = "  \\\\//";
//     char five[20] = " \\\\\\///";
//     char six[20] = "\\\\\\\\////";

//     printf("%s\n", first);
//     printf("%s\n", second);
//     printf("%s\n", third);
//     printf("%s\n", four);
//     printf("%s\n", five);
//     printf("%s\n", six);

//     return 0;
// }


// #include <stdio.h>
// int main()
// {
//     printf("////\\\\\\\\\n");
//     printf(" ///\\\\\\\n");
//     printf("  //\\\\\n");
//     printf("**Abhinav**\n");
//     printf("  \\\\//\n");
//     printf(" \\\\\\///\n");
//     printf("\\\\\\\\////\n");
//     return 0;
// }


#include<stdio.h>
int main()
{
    int x = printf("hello");
    printf("%d", x);
    return 0;
}

