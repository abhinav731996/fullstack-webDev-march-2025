#include <stdio.h>

int display();
int add(int a, int b);
int subtraction(int a, int b);
int multiply(int a, int b);
int division(int a, int b);
int display_message(char message[20], int output);


int main()
{
    for (int i = 0; i < 4; i++)
    {
    display();
    }

    int num1 = 10;
    int num2 = 20;
    int output;

    output = add(num1,num2);
    display_message("Addition", output);

    output = subtraction(num1,num2);
    display_message("Subtraction", output);

    output = multiply(num1,num2);
    display_message("Multiply", output);

    output = division(num1,num2);
    display_message("Division", output);


    return 0; 
}

int display()
{
    printf("hello\n");
    return 0;
}

int add(int a, int b)
{
    return a+b;
}

int subtraction(int a, int b)
{
    return a-b;
}

int multiply(int a, int b)
{
    return a*b;
}

int division(int a, int b)
{
    return a/b;
}

int display_message(char message[20], int output)
{
    printf("%s of two number: %d\n",message, output);
    return 0;
}