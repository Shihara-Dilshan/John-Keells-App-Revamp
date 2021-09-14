from mongoengine import Document, StringField, DecimalField, IntField

class Product(Document):
    title = StringField(required=True, max_length=256)
    description = StringField(required=True, max_length=1024)
    image = StringField(required=True, max_length=1024)
    category = StringField(required=True, max_length=256)
    price = DecimalField(required=True, precision=2)
    quantity = IntField(required=True, min_value=1)