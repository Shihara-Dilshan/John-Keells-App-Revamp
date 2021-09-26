export default class OrderItemModel {
  //TODO:  add orderData as a array of object(better to have a model class) so user's can view all ordered data
  constructor(id, orderNumber, orderDate, total, oderType, orderStatus) {
    this._id = id;
    this._orderNumber = orderNumber;
    this._orderDate = orderDate;
    this._total = total;
    this._oderType = oderType;
    this._orderStatus = orderStatus;
  }

  get id() {
    return this._id;
  }

  get orderNumber() {
    return this._orderNumber;
  }

  get orderDate() {
    return this._orderDate;
  }

  get total() {
    return this._total;
  }

  get oderType() {
    return this._oderType;
  }

  get orderStatus() {
    return this._orderStatus;
  }
}
