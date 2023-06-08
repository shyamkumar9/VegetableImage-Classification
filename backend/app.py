from flask import Flask, request, make_response
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route("/")
def hello():
    return "Hello world"

@app.route("/test")
def hello2():
    return "Hello test endpoint"