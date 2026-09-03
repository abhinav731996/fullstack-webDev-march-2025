import mysql.connector as MyConn

mydb = MyConn.connect(
    host="localhost",
    user="root",
    password="Abhi9034340@"
)

db_cursor = mydb.cursor()

#  # to delete entire data:-
# db_deletData = "truncate table form LearingCoding.Emp"

db_deleteData = "DELETE FROM LearingCoding.Emp WHERE name = %s"

db_value = ("Deepak",)

db_cursor.execute(db_deleteData, db_value)

mydb.commit()

print(db_cursor.rowcount, "record deleted successfully")
