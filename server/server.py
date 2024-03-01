from flask import Flask
import json
from data import catalog
from flask_cors import CORS

app = Flask (__name__)
CORS(app) #warning: this disable CORS polciy 

@app.get("/")
def home():
    return "Hello, from flask"


@app.get("/test")
def test():
    return"This is another page"

@app.get('/api/products')
def get_products():
    return json.dumps(catalog)
# This will be the endpoints of the Json
# This is an API endpoint



app.run(debug=True)