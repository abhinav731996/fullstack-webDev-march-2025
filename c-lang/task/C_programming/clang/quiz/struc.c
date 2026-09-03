// ++++++++++++++++++++++ Method-1 ++++++++++++++
// #include <stdio.h>

// int main()
// {
//     printf("*      *\n");
//     printf(" *    *\n");
//     printf("  *  *\n");
//     printf("   **\n");
//     return 0; 
// }



// ++++++++++++++++++++++ Method-2 ++++++++++++++

// *      *
//  *    *
//   *  * 
//    **

//     1 - 4 rows
//     2 - landing space inceases row by row (0,1,2,3)
//     3 - print *
//     4 - middle space decreases rwo by row (6,4,2,0)
//     5 - another *.


// #include <stdio.h>

// int main() {
//     int n = 4;  // number of rows

//     for (int i = 0; i < n; i++) {
//         // Step 1: Print leading spaces
//         for (int space = 0; space < i; space++) {
//             printf(" ");
//         }

//         // Step 2: Print first star
//         printf("*");

//         // Step 3: Print middle spaces
//         for (int space = 0; space < 2*(n-i-1); space++) {
//             printf(" ");
//         }

//         // Step 4: Print second star (only if not last row)
//         if (i != n) {
//             printf("*");
//         }

//         printf("\n"); // Next line
//     }

//     return 0;
// }



// ++++++++++++++++++++++ Another case ++++++++++++++
// ////\\\\
//  ///\\\
//   //\\
//    /\
//  Abhinav    
//    \/
//   \\//
//  \\\///
// \\\\////

// #include<stdio.h>
// int main()
// {
//     int n = 4;   // number of rows for top & bottom part
    
//     //top part
//     for (int i = 0; i < n; i++)
//     {
//         for (int s = 0; s < i; s++)
//         {
//             printf(" ");
//         }
//         for (int j = i; j < n; j++)
//         {
//             printf("/");
//         }
//         for (int j = i; j < n; j++)
//         {
//             printf("\\");
//         }
        
//         printf("\n");
//     }
    
//     printf(" Abhinav");

//     for (int i = n; i >=0; i--)
//     {
//         for (int s = 0; s < i; s++)
//         {
//             printf(" ");
//         }
//         for (int j = i; j < n; j++)
//         {
//             printf("\\");
//         }
//         for (int j = i; j < n; j++)
//         {
//             printf("/");
//         }
//         printf("\n");
          
//     }
    
//     return 0;
// }



// ++++++++ Another case ++++++++++++

// *      *
//  *    *
//   *  *
//    **
//   *  *
//  *    *
// *      *
// #include <stdio.h>

// int main() {
//     int n = 4; // Half of diamond height

//     // Top Half (same as before)
//     for (int i = 0; i < n; i++) {
//         // Leading spaces
//         for (int space = 0; space < i; space++) {
//             printf(" ");
//         }
//         // First star
//         printf("*");

//         // Middle spaces
//         for (int space = 0; space < 2*(n-i-1); space++) {
//             printf(" ");
//         }
//         // Second star (skip at center)
//         if (i != n) {
//             printf("*");
//         }

//         printf("\n");
//     }

//     // Bottom Half (reverse)
//     for (int i = n-2; i >= 0; i--) {
//         // Leading spaces
//         for (int space = 0; space < i; space++) {
//             printf(" ");
//         }
//         // First star
//         printf("*");

//         // Middle spaces
//         for (int space = 0; space < 2*(n-i-1); space++) {
//             printf(" ");
//         }
//         // Second star
//         printf("*");

//         printf("\n");
//     }

//     return 0;
// }



// ++++++++++ Another case +++++++++++++

//    * 
//   * * 
//  * * * 
// * * * * 

// #include<stdio.h>
// int main()
// {
//     int num = 4;
//     for (int i = 0 ; i <= num; i++)
//     {
//         for (int space = 0 ; space <= num-i; space++)
//         {
//             printf(" ");
//         }
        
//         for (int j = 1; j <= i; j++)
//         {
//             printf("* ");
//         }
//         printf("\n");
//     }
    
//     return 0;
// }


//+++++++++++ Another case ++++++++++++

// ******
// *
// *
// *
// *


#include<stdio.h>
int main()
{
    
    for (int i = 0; i < 7; i++)
    {
        printf("* ");
    }
    for (int i = 0; i < 5; i++)
    {
        printf("*\n");
    }
    
    return 0;
}


//+++++++++++++++ Another case ++++++++++++

// *****
//  ***
//   *

// #include<stdio.h>
// int main()
// {
//     int row = 3;
//     int star = 5;
//     for (int i = 0; i < row; i++)
//     {
//         for (int space = 0; space < i; space++)
//         {
//             printf(" ");
//         }
//         for (int j = 0; j < star - 2 * i; j++)
//         {
//             printf("*");
//         }
       
//         printf("\n");
//     }
    
//     return 0;
// }