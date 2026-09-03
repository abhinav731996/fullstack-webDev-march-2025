import mysql.connector as MyConn

mydb = MyConn.connect(
    host = "localhost",
    user = "root",
    password = "Abhi9034340@",
    # database = "LearingCoding"

)

db_cursor = mydb.cursor()

db_updateData = "update LearingCoding.Emp set roll = %s where name = %s"

db_value = (50, "Sam")

db_cursor.execute(db_updateData, db_value)

mydb.commit()

print("updated succefully")