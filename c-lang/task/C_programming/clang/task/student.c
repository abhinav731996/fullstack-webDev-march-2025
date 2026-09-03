#include <stdio.h>

void displayMenu();
void studentRegis();
int main()
{
    studentRegis();

    return 0;
}
void displayMenu()
{
    printf("please select any number: \n");
    printf("Press 1 for registrtion: \n");
    printf("Press 2 for view student record: \n");
    printf("Press 3 for exit: \n");
}

void studentRegis(){
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

        displayMenu();
        scanf("%d", &num);

        if (num == 1)
        {
            if (count >= 5)
            {
                printf("maximum student limit is 5!!");
            }

            printf("mandatory fields for student registration: \n");

            printf("Please enter id: ");
            scanf("%d", &id[count]);

            printf("Please enter name: ");
            scanf(" %[^\n]", &name[count]);

            printf("Please enter age: ");
            scanf("%d", &age[count]);

            printf("Please enter contact no.: ");
            scanf("%lld", &contact[count]);

            printf("Please enter class: ");
            scanf("%d", &class[count]);

            printf("Please enter email: ");
            scanf("%s", &email[count]);

            count++;
        }
        else if (num == 2)
        {
            if (count == 0)
            {
                printf("no student record found!!\n");
                continue;
            }

            printf("student record: \n");

            for (int i = 0; i < count; i++)
            {
                printf("id: %d\n", id[i]);
                printf("name: %s\n", name[i]);
                printf("age: %d\n", age[i]);
                printf("contact: %lld\n", contact[i]);
                printf("class: %d\n", class[i]);
                printf("email: %s\n", email[i]);
            }
        }
        else if (num == 3)
        {
            printf("Exiting...\n");
            running = 0;
        }
        else
        {
            printf("please select valid option!!");
        }
    }
}