// #include <stdio.h>

// int main()
// {
    // ------------------------------ for loop ----------------------------------

    // for(int i = 1; i<=5; i++)
    // {
    //     printf("%d\n", i*2);
    // }
    // ----------------------------------------------
    
    // printf("\n for text \n");

    // for (char ch = 'a'; ch <= 'z'; ch += 2)
    // {
    //     printf("%c \n", ch);
    // }
    

    // ---------------------------- while loop -------------------------------
    // int i = 1; 
    // int sum = 0;
    
    // while(i<=10){
    //     sum += i;
    //     i++;
    // }

    // printf("Sum is %d\n", sum);
    // return 0;

// }

    // ----------------------------- do-while-loop ----------------------------
    #include <stdio.h>

    int main()
    {
        int num;
        do
        {
            printf("please enter +ve number: ");
            scanf("%d", &num);
        } while (num <= 0);
        
        printf("you enterd number %d\n", num);
        return 0;
    }




