import jwt
import os
from flask import make_response, request

def generate_token(payload, secret):
    return jwt.encode(payload, secret, algorithm="HS256")

def validate_token(func):
    secret = os.environ.get('TOKEN_SECRET')
    def wrapper(*args, **kwargs):
        try:
            token = request.headers['token']
        except Exception as e:
            return make_response({"message": "Token not provided"}, 403)
        
        try:
            jwt.decode(token, secret, algorithms=["HS256"])
            return func(*args, **kwargs)
        except Exception as e:
            return make_response({"message": "Invalid token provided"}, 403)   
    return wrapper