import os
from flask import Flask, request, redirect, url_for
from werkzeug import secure_filename
from azure.storage.blob import BlockBlobService
import string, random, requests
import pyodbc
import pandas as pd

app = Flask(__name__, instance_relative_config=True)

app.config.from_pyfile('config.py')
account = app.config['ACCOUNT']   # Azure account name
key = app.config['STORAGE_KEY']      # Azure Storage account access key
container = app.config['CONTAINER'] # Container name

server = 'mediary.database.windows.net'
database = 'MeDiary'
username = 'mediary'
password = 'hackcambridge-1'
driver= '{ODBC Driver 17 for SQL Server}'

cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()

blob_service = BlockBlobService(account_name=account, account_key=key)

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
    	file = request.files['file']
        condition_id = request.args.get("id")
    	# filename = secure_filename(file.filename)
        filename = file.filename
        filename = condition_id + '/' + filename
    	# fileextension = filename.rsplit('.',1)[1]
        # Randomfilename = id_generator()
        # filename = Randomfilename + '/' + fileextension
        try:
            blob_service.create_blob_from_stream(container, filename, file)
        except Exception:
            print 'Exception=' + Exception
            pass
        ref =  'https://'+ account + '.blob.core.windows.net/' + container + '/' + filename
        return '''
	    <!doctype html>
	    <title>File Link</title>
	    <h1>Uploaded File Link</h1>
	    <p>''' + ref + '''</p>
	    <img src="'''+ ref +'''">
	    '''
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="?id=1" method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''

@app.route('/sql', methods=['GET', 'POST'])
def upload_data():
    # app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    nhs_number = request.args.get("nhs_number")
    condition = request.args.get("condition")

    # View database
    query = "SELECT * FROM Conditions where nhs_number=" + nhs_number
    df = pd.read_sql(query, cnxn)

    df.head()
    print(df)

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

def id_generator(size=32, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

if __name__ == '__main__':
    app.run(debug=True)
    cursor.close()
    cnxn.close()

