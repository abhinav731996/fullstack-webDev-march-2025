// #include <stdio.h>

// int main()
// {
//     int num[5] = {3, 7, 4, 9, 2};
//     int n = 5;

//     // Bubble Sort (Descending)
//     for (int i = 0; i < n - 1; i++)
//     {
//         for (int j = 0; j < n - i - 1; j++)
//         {
//             if (num[j] < num[j + 1])
//             {
//                 int temp = num[j];
//                 num[j] = num[j + 1];
//                 num[j + 1] = temp;
//             }
//         }
//     }

//     printf("Top 3 numbers:\n");

//     for (int i = 0; i < 3; i++)
//     {
//         printf("%d ", num[i]);
//     }

//     return 0;
// }









#include <stdio.h>

int main()
{
    int num[] = {9, 7, 9, 4, 7, 2};
    int n = 6;

    // Sort Descending
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (num[j] < num[j + 1])
            {
                int temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }

    printf("Top 3 distinct numbers:\n");

    int count = 1;
    printf("%d ", num[0]);

    for (int i = 1; i < n && count < 3; i++)
    {
        if (num[i] != num[i - 1])
        {
            printf("%d ", num[i]);
            count++;
        }
    }

    return 0;
}