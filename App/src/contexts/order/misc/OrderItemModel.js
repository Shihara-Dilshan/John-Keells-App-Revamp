export default class OrderItemModel {
  //TODO:  add orderData as a array of object(better to have a model class) so user's can view all ordered data
  constructor(
    id,
    orderNumber,
    orderDate,
    total,
    orderType,
    orderStatus,
    recipientName,
    contactNo,
    houseNo,
    streetName,
    city,
    paymentStatus,
  ) {
    this._id = id;
    this._orderNumber = orderNumber;
    this._orderDate = orderDate;
    this._total = total;
    this._orderType = orderType;
    this._orderStatus = orderStatus;
    this._recipientName = recipientName;
    this._houseNo = houseNo;
    this._streetName = streetName;
    this._city = city;
    this._contactNo = contactNo;
    this._paymentStatus = paymentStatus;
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

  get orderType() {
    return this._orderType;
  }

  get orderStatus() {
    return this._orderStatus;
  }

  get recipientName() {
    return this._recipientName;
  }

  get houseNo() {
    return this._houseNo;
  }

  get streetName() {
    return this._streetName;
  }

  get city() {
    return this._city;
  }

  get contactNo() {
    return this._contactNo;
  }

  get paymentStatus() {
    return this._paymentStatus;
  }
}
