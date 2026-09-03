import mysql.connector as MyConn

mydb = MyConn.connect(
    host = "localhost",
    user = "root",
    password = "Abhi9034340@",
    database = "LearingCoding"
)

db_cursor = mydb.cursor()

# # table-1-----------------------------------
# db_cursor.execute("create table Emp(Roll int, Name varchar(20))")

# print("table created !!")


# # table-2----------------------------------
# db_cursor.execute("create table Emp2(Roll int, Name varchar(20))")

# print("table created !!")


# #  to show table -----------------------------
db_cursor.execute("show tables")
for i in db_cursor:
    print(i)