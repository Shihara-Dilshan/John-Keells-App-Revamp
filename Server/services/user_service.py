from model.user import User
from utils.passwordEncryption import encrypt_password, compare_passwords
from utils.JwtToken import generate_token
from flask import make_response
import os
import datetime

def signup_service(userdata):
    try:
        email_check = User.objects[:1](email=userdata['email'])
        if email_check:
            return {"status": 404, "message": "email already exists"}
        else:
            name = userdata['name']
            email = userdata['email']
            image = userdata['image']
            mobile = userdata['mobile']
            password = encrypt_password(userdata['password'])

            user = User(name=name, email=email, image=image,
                        mobile=mobile, password=password)
            user.save()

            return make_response({'message': 'succesfully inserted'}, 200)

    except Exception as e:
        return make_response({'message': str(e)}, 404)


def login_service(user_credentials):
    try:
        email_check = User.objects[:1](email=user_credentials['email'])
        if not email_check:
            return {"status": 404, "message": "email does not exists"}
        else:
            for user in email_check:
                payload = {"email": user['email'], "_id": str(user['id']), 'exp': datetime.datetime.utcnow(
                ) + datetime.timedelta(minutes=60)}
                secret = os.environ.get('TOKEN_SECRET')
                if compare_passwords(user_credentials['password'], user['password']):
                    token = generate_token(payload, secret)
                    return make_response({'token': token}, 200)
                else:
                    return make_response({'message': 'Invalid password'}, 403)

    except Exception as e:
        return make_response({'message': str(e)}, 404)
