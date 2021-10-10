from model.product import Product
from flask import make_response
from utils.DecimalEncoder import Encoder
import json
from utils.JwtToken import validate_token

@validate_token
def add_product_service(product_data):
    try:
        title = product_data['title']
        description = product_data['description']
        image = product_data['image']
        category = product_data['category']
        price = product_data['price']
        quantity = product_data['quantity']

        product = Product(title=title, description=description, image=image,
                          category=category, price=price, quantity=quantity)
        product.save()
        return make_response({'message' : 'succesfully inserted'}, 201)   
    except Exception as e:
        return make_response({'message' : str(e)}, 404)  

def get_product_service():
    products = []
    try:
        for product in Product.objects:
            product_data = {}
            product_data['_id'] = str(product.id)
            product_data['title'] = product.title
            product_data['description'] = product.description
            product_data['image'] = product.image
            product_data['category'] = product.category
            product_data['price'] = json.dumps(product.price, cls=Encoder)
            product_data['quantity'] = product.quantity
            products.append(product_data)

        return {"products": products}
    except Exception as e:
        return make_response({'message' : str(e)}, 404)  

def get_productbyid_service(product_id):
    products = []
    try:
        product_data = Product.objects[:1](id=product_id)
        for product in product_data:
            product_data = {}
            product_data['_id'] = str(product.id)
            product_data['title'] = product.title
            product_data['description'] = product.description
            product_data['image'] = product.image
            product_data['category'] = product.category
            product_data['price'] = json.dumps(product.price, cls=Encoder)
            product_data['quantity'] = product.quantity
            products.append(product_data)

        return {"product": products}
    except Exception as e:
        return make_response({'message' : str(e)}, 404)  

def get_product_by_category_service(categoryName):
    products = []
    try:
        product_data = Product.objects(category=categoryName)
        for product in product_data:
            product_data = {}
            product_data['_id'] = str(product.id)
            product_data['title'] = product.title
            product_data['description'] = product.description
            product_data['image'] = product.image
            product_data['category'] = product.category
            product_data['price'] = json.dumps(product.price, cls=Encoder)
            product_data['quantity'] = product.quantity
            products.append(product_data)

        return {"products": products}
    except Exception as e:
        return make_response({'message' : str(e)}, 404)  

@validate_token
def update_product_service(product_id, product_data):
    try:
        product = Product.objects(id=product_id) # return a queryset
        if product:     
            product = product.get(id=product_id) # return an object from queryset
            product.title = product_data['title']
            product.description = product_data['description']
            product.image = product_data['image']
            product.category = product_data['category']
            product.price = product_data['price']
            product.quantity = product_data['quantity']
            product.save()
        
            return make_response({'message' : 'succesfully updated'},201)   
        else:
            return make_response({'message' : "product does not exists"}, 404) 
    except Exception as e:
        return make_response({'message' : str(e)}, 404)  

@validate_token
def delete_product_service(product_id):
    try:
        product = Product.objects(id=product_id) 
        if product:     
            product.delete()
        
            return make_response({'message' : 'succesfully delected'}, 200)   
        else:
            return make_response({'message' : 'product does not exists'}, 404)   
    except Exception as e:
        return make_response({'message' : str(e)}, 404)   
        