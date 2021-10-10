export default class CategoryModel {
  constructor(id, title, item) {
    this._id = id;
    this._title = title;

    this._item = item;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get item() {
    return this._item;
  }
}
