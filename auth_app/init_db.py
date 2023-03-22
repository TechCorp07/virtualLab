import sqlite3

connection = sqlite3.connect('mydatabase.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()
cur.execute("INSERT INTO node01 (temp, hum) VALUES (?, ?)",
            ('23', '44')
            )

connection.commit()
connection.close()