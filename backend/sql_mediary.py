import pyodbc
import pandas as pd

import os
from flask import Flask, flash, request, redirect, url_for

app = Flask(__name__)


server = 'mediary.database.windows.net'
database = 'MeDiary'
username = 'mediary'
password = 'hackcambridge-1'
driver= '{ODBC Driver 17 for SQL Server}'

cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()

@app.route('/', methods=['GET', 'POST'])
def upload_data():
    # app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    nhs_number = request.args.get("nhs_number")
    condition = request.args.get("condition")

    # View database
    query = "SELECT * FROM Conditions where nhs_number=" + nhs_number
    df = pd.read_sql(query, cnxn)

    df.head()
    print(df)
    # print(df)
    # Write to database
    cursor.execute("INSERT INTO Conditions(nhs_number, condition) values (" + nhs_number + ", '" + condition + "') ")
    cnxn.commit()

    return '''
    	    <!doctype html>
    	    <title>File Link</title>
    	    <h1>Uploaded File Link</h1>
    	    '''
    return '''
        <!doctype html>
        <title>Upload new File</title>
        <h1>Upload new File</h1>
        <form action="?nhs_number=0&condition=none" method=post enctype=multipart/form-data>
          <p><input type=file name=file>
             <input type=submit value=Upload>
        </form>
        '''






# cursor.execute("DELETE FROM Conditions")
# cnxn.commit()
if __name__ == '__main__':
    app.run(debug=True, port = 5001)

    cursor.close()
    cnxn.close()