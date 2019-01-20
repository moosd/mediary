import os

DEBUG = False
TESTING = False
PORT = int(os.environ.get('PORT', '8000'))
HOST = os.environ.get('HOST', '127.0.0.1')
SECRET_KEY = os.urandom(24)
ACCOUNT = 'mediary'
STORAGE_KEY = "urjeyB379mEvk6rGazR0/zEVLfPHchvICqdeSxabNe/T5wmpz/WZX0xp4QKb+AniQKLyvJlr4XJY/N4uggrJfw=="
CONTAINER = 'mediary'