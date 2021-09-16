from flask import Blueprint, request
from services.user_service import signup_service, login_service

user_route = Blueprint('user_route', __name__)

@user_route.route("/api/v2/user/signup", methods=['POST'])
def signup():
    data = request.get_json()
    return signup_service(data)

@user_route.route("/api/v2/user/login", methods=['POST'])
def login():
    data = request.get_json()
    return login_service(data)