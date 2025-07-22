class Section {
  constructor({ items = [], renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(".todos__list");
  }

  renderItems() {
    items.array.forEach((element) => {
      this._renderer();
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}
