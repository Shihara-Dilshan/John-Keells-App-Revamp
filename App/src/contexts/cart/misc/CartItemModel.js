export default class CartItemModel {
  constructor(id, imageUrl, title, quatity, unitPrice) {
    this._id = id;
    this._imageUrl = imageUrl;
    this._title = title;
    this._quatity = quatity;
    this._unitPrice = unitPrice;
  }

  get id() {
    return this._id;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get title() {
    return this._title;
  }

  get quatity() {
    return this._quatity;
  }

  get unitPrice() {
    return this._unitPrice;
  }
}
