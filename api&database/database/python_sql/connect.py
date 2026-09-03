import mysql.connector as MyConn

mydb = MyConn.connect(
    host="localhost",
    user="root",
    password="Abhi9034340@"
)

print(mydb, "connection established...")