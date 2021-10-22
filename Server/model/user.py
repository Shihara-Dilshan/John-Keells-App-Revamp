from mongoengine import Document, StringField, EmailField

class User(Document):
    name = StringField(required=True, max_length=256)
    email = EmailField(required=True, max_length=1024)
    image = StringField(required=True, max_length=1024)
    mobile = StringField(required=True, max_length=256)
    password = StringField(required=True, max_length=1024)