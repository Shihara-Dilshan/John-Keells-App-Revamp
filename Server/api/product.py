from flask import Blueprint, request
from services.product_service import add_product_service, get_product_service, get_productbyid_service, get_product_by_category_service, update_product_service, delete_product_service
product_route = Blueprint('product_route', __name__)


@product_route.route("/api/v2/product/add", methods=['POST'])
def add_product():
    data = request.get_json()
    return add_product_service(data)

@product_route.route("/api/v2/product/viewall", methods=['GET'])
def get_products():
    return get_product_service()

@product_route.route("/api/v2/product/viewbyid/<product_id>", methods=['GET'])
def get_product_by_id(product_id):
    return get_productbyid_service(product_id)

@product_route.route("/api/v2/product/viewbycategory/<category>", methods=['GET'])
def get_product_by_category(category):
    return get_product_by_category_service(category)

@product_route.route("/api/v2/product/update/<product_id>", methods=['PATCH'])
def update_product(product_id):
    product_data = request.get_json()
    return update_product_service(product_id, product_data)

@product_route.route("/api/v2/product/delete/<product_id>",methods=['DELETE'])
def delete_product(product_id):
    return delete_product_service(product_id)