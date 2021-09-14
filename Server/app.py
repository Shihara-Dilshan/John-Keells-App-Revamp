import os
from flask import Flask
from flask_cors import CORS
from api.product import product_route
from mongoengine import connect

app = Flask(__name__)
app.register_blueprint(product_route)
 
CORS(app)

connect(host=os.environ.get('MONGO_URI'))

if __name__ == "__main__":
    app.run(debug=True)