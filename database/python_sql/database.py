import mysql.connector as MyConn

mydb = MyConn.connect(
    host="localhost",
    user="root",
    password="Abhi9034340@"
)

db_cursor = mydb.cursor()
db_cursor.execute("create database LearingCoding")

print("databse created")