#include <stdio.h>

int main()
{
    int num;
    int id[5];
    char name[5][30];
    int age[5];
    long long int contact[5];
    int class[5];
    char email[5][30];

    int count = 0;
    int running = 1;

    while (running)
    {
        printf("\n===== MENU =====\n");
        printf("1. Registration\n");
        printf("2. View Records\n");
        printf("3. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &num);

        if (num == 1)
        {
            if (count >= 5)
            {
                printf("Maximum student limit reached!\n");
                continue;
            }

            printf("Enter ID: ");
            scanf("%d", &id[count]);

            printf("Enter Name: ");
            scanf(" %[^\n]", name[count]);

            printf("Enter Age: ");
            scanf("%d", &age[count]);

            printf("Enter Contact No: ");
            scanf("%lld", &contact[count]);

            printf("Enter Class: ");
            scanf("%d", &class[count]);

            printf("Enter Email: ");
            scanf("%s", email[count]);

            count++;

            printf("Student Registered Successfully!\n");
        }
        else if (num == 2)
        {
            if (count == 0)
            {
                printf("No student records found.\n");
                continue;
            }

            printf("\n===== STUDENT RECORDS =====\n");

            for (int i = 0; i < count; i++)
            {
                printf("\n-------------------------\n");
                printf("ID      : %d\n", id[i]);
                printf("Name    : %s\n", name[i]);
                printf("Age     : %d\n", age[i]);
                printf("Contact : %lld\n", contact[i]);
                printf("Class   : %d\n", class[i]);
                printf("Email   : %s\n", email[i]);
            }
        }
        else if (num == 3)
        {
            printf("Exiting...\n");
            running = 0;
        }
        else
        {
            printf("Invalid Option!\n");
        }
    }

    return 0;
}