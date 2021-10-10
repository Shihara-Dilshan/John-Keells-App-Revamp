export default class ItemModel {
  constructor(id, imageUrl, title, smallestUnit, unitPrice) {
    this._id = id;
    this._imageUrl = imageUrl;
    this._title = title;
    this._smallestUnit = smallestUnit;
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

  get smallestUnit() {
    return this._smallestUnit;
  }

  get unitPrice() {
    return this._unitPrice;
  }
}
