# Firstnumber= int(input(" enter the first number: "))
# Secondnumber= int(input(" enter the second number: "))

# Data={
#     "Addition":Firstnumber + Secondnumber ,
#     "substraction":Firstnumber - Secondnumber ,
#     "Multiplication":Firstnumber * Secondnumber ,
#     "Divison":Firstnumber / Secondnumber 
# }

# print(Data)


# ****************************************************

# Id=int(input("Enter Id: "))
# Name=(input("Enter Name: "))
# Address=(input("Enter Address: "))
# Qualification=(input("Enter Qualification: "))
# Passing_Year=(input("Enter Passing_Year: "))
# Qualification2=(input("Enter Qualification: "))
# Passing_Year2=(input("Enter Passing_Year: "))
# Qualification3=(input("Enter Qualification: "))
# Passing_Year3=(input("Enter Passing_Year: "))
# Qualification4=(input("Enter Qualification: "))
# Passing_Year4=(input("Enter Passing_Year: "))

# Studentdetails={}
# Studentdetails["Id"] = "Id"
# Studentdetails["Name"] = "Name"
# Studentdetails["Address"] = "Address"
# Studentdetails["Qualification"] = [{"Name": Qualification}],
# [{"Passing_Year": Passing_Year}],
# [{"Name": Qualification2}],
# [{"Passing_Year": Passing_Year2}],
# [{"Name": Qualification3}],
# [{"Passing_Year": Passing_Year3}],
# [{"Name": Qualification4}],
# [{"Passing_Year": Passing_Year4}]
# listdata=[]
# listdata.append(Studentdetails)
# print(listdata)



# ***********************************************

Student=[]

while(True):
     total=int(input("How Many Students they want to Register: "))
     if total > 0 and total < 11:
    
        for i in range(total):
            print(f"Student{i+1}")

            Studentdata={}

            Studentdata["Id"] = int(input("Enter Id: "))
            Studentdata["Name"] = input("Enter Name: ")
            Studentdata["Address"] = input("Enter Address: ")
            Studentdata["Contact No"] = int(input("Enter Contact_No: "))
            Studentdata["Email Id"] = input("Enter Email_Id: ")
            
            Qualification=[]
            print("Enter Any Qualification: ")
            while(True):
                Decesion=input("Do you want to add Qualification Y/N :")
                if Decesion.upper()=="Y":
                    subqualification={}
                    subqualification["Name"]=input("Enter Qualification Name: ")
                    subqualification["Passing Year"]=input("Enter Passing Year: ")
                    Qualification.append(subqualification)

                else:
                    break

            Studentdata["Qualification"]=Qualification
            Student.append(Studentdata)

            break
        else:
            print("please enter valid numbe b/w 1-10!!")

for Studentdata in Student:
        print(Studentdata)