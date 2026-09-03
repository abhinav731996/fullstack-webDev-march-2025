#include <stdio.h>

void displayMenu();
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

        displayMenu();
        scanf("%d", &num);

        if (num == 1)
        {
            if (count>=5)
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

    return 0;
}
void displayMenu(){
    printf("please select any number: \n");
    printf("Press 1 for registrtion: \n");
    printf("Press 2 for view student record: \n");
    printf("Press 3 for exit: \n");
    
}



// *********** using function method - 1  ************

// #include <stdio.h>

// // Function declarations
// void displayMenu();
// void registerStudent(int num, int id[], char name[][30], int age[], long long int contact[], int class[], char email[][30], int *count, int *running);

// int main()
// {
//     int num;
//     int id[5];
//     char name[5][30];
//     int age[5];
//     long long int contact[5];
//     int class[5];
//     char email[5][30];
//     int count = 0;
//     int running = 1;

//     while (running)
//     {
//         displayMenu();
//         scanf("%d", &num);

//         registerStudent(num, id, name, age, contact, class, email, &count, &running);
//     }

//     return 0;
// }

// // Function to display the menu
// void displayMenu()
// {
//     printf("\nPlease select any option:\n");
//     printf("1. Register student\n");
//     printf("2. View student records\n");
//     printf("3. Exit\n");
//     printf("Enter your choice: ");
// }

// // Function to handle registration and viewing
// void registerStudent(int num, int id[], char name[][30], int age[], long long int contact[], int class[], char email[][30], int *count, int *running)
// {
//     if (num == 1)
//     {
//         if (*count >= 5)
//         {
//             printf("Maximum student limit (5) reached!\n");
//             return;
//         }

//         printf("\n--- Student Registration ---\n");

//         printf("Please enter ID: ");
//         scanf("%d", &id[*count]);

//         printf("Please enter Name: ");
//         scanf(" %[^\n]", name[*count]);

//         printf("Please enter Age: ");
//         scanf("%d", &age[*count]);

//         printf("Please enter Contact No.: ");
//         scanf("%lld", &contact[*count]);

//         printf("Please enter Class: ");
//         scanf("%d", &class[*count]);

//         printf("Please enter Email: ");
//         scanf("%s", email[*count]);

//         (*count)++;
//         printf("Student registered successfully!\n");
//     }
//     else if (num == 2)
//     {
//         if (*count == 0)
//         {
//             printf("No student record found!\n");
//             return;
//         }

//         printf("\n--- Student Records ---\n");
//         for (int i = 0; i < *count; i++)
//         {
//             printf("\nStudent %d:\n", i + 1);
//             printf("ID: %d\n", id[i]);
//             printf("Name: %s\n", name[i]);
//             printf("Age: %d\n", age[i]);
//             printf("Contact: %lld\n", contact[i]);
//             printf("Class: %d\n", class[i]);
//             printf("Email: %s\n", email[i]);
//         }
//     }
//     else if (num == 3)
//     {
//         printf("Exiting...\n");
//         *running = 0;
//     }
//     else
//     {
//         printf("Please select a valid option!\n");
//     }
// }



// ************* using function method - 2 *************

#include <stdio.h>


char id[5][10];
char name[5][50];
int age[5];
char number[5][15];
char gmail[5][50];
char rollno[5][20];

void registration();
void display();
void menu();
int choice;
void stdchoice();


int main()
{
    stdchoice ();
    return 0;
}

void registration() 
{
    int inputdata;
    printf("Enter the number of students to register : ");
    scanf("%d", &inputdata);

    if (inputdata > 5 || inputdata <= 0)
    {
        printf("Invalid input. Please enter between 1 and 5.\n");
        return;
    }

    for (int i = 0; i < inputdata; i++)
    {
        printf("\nStudent %d\n", i + 1);
        printf("Enter student ID: ");
        scanf("%s",&id[i]);
        printf("Enter student name: ");
        scanf(" %[^\n]",&name[i]); 
        printf("Enter student age: ");
        scanf("%d", &age[i]);
        printf("Enter mobile number: ");
        scanf("%s",&number[i]);
        printf("Enter student Gmail: ");
        scanf("%s",&gmail[i]);
        printf("Enter student roll number: ");
        scanf("%s",&rollno[i]);
        printf("\n");
        printf("\n");
    }
}

void display() 
{
    int displayData;
    printf("\nHow many students' data to display: ");
    scanf("%d", &displayData);

    if (displayData > 5 || displayData <= 0)
    {
        printf("Invalid input. Please enter between 1 and 5.\n");
        return;
    }

    for (int i = 0; i < displayData; i++)
    {
        printf("\nStudent %d\n", i + 1);
        printf("ID: %s\n", id[i]);
        printf("Name: %s\n", name[i]);
        printf("Age: %d\n", age[i]);
        printf("Mobile Number: %s\n", number[i]);
        printf("Gmail: %s\n", gmail[i]);
        printf("Roll No: %s\n", rollno[i]);
    }

}
void menu()
{
    printf("press 1. for the registration.\n");
    printf("press 2. for the display the student data.\n");
    printf("press 3 or any option to exit.\n");

}
void stdchoice ()
{
    while(1)
    {
    printf("\ngiven menu below.\n");
    menu();
    printf("enter your choice according to menu :");
    scanf("%d",&choice);
    if (choice==1)
    {
        registration();       
    }
    else if(choice==2)
    {
        display();
    }
    else 
    {
        printf("thanks....\n");
        printf("exiting.....\n");
        break;

    }

    }
}