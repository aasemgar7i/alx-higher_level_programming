#!/usr/bin/python3
""" List all states from DB hbtn_0e_0_usa """
import MySQLdb
import sys


if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1],
                         passwd=sys.argv[2], db=sys.argv[3])
    curs = db.cursor()
    curs.execute("SELECT * FROM states ORDER BY states.id")
    col = curs.fetchall()
    for row in col:
        print(row)
    curs.close()
    db.close()
