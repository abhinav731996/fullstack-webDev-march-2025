import mysql.connector as MyConn

mydb = MyConn.connect(
    host = "localhost",
    user = "root",
    password = "Abhi9034340@",
    database = "LearingCoding"
)

db_cursor = mydb.cursor()

# # to add one data at time:- 
# db_cursor.execute("insert into Emp(Roll, Name) values(%s, %s)", (10, "Abhinav"))


# # to add multiple data at a time:-
db_insert = ("insert into Emp(Roll, Name) values(%s, %s)")
db_list = [(20, "Sahil"), (30, "Deepak"), (40, "Sam")]

db_cursor.executemany(db_insert, db_list)

mydb.commit()

print(db_cursor.rowcount, "Record Inserted")

