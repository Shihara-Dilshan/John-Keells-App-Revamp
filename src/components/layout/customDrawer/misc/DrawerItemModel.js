export default class DrawerItemModel {
  constructor(icon, title, subtitle, actionPageUrl) {
    this._icon = icon;
    this._title = title;
    this._subtitle = subtitle;
    this._actionPageUrl = actionPageUrl;
  }

  get icon() {
    return this._icon;
  }

  get title() {
    return this._title;
  }

  get subtitle() {
    return this._subtitle;
  }

  get actionPageUrl() {
    return this._actionPageUrl;
  }
}
