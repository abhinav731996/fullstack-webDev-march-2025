import mysql.connector as MyConn

mydb = MyConn.connect(
    host = "localhost",
    user = "root",
    password = "Abhi9034340@"
)

db_cursor = mydb.cursor()


db_cursor.execute("select * from LearingCoding.Emp")

# db_select = db_cursor.fetchone()              # this will show only one data
#  print(db_select)


# # to get multipule data use loop:-
for db_data in db_cursor.fetchall():
    print(db_data)

