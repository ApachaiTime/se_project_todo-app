import { initialTodos } from "../utils/constants.js";

export default class Section {
  constructor({ items, renderTodo, containerSelector }) {
    this._containerSelector = document.querySelector(".todos__list");
    this._items = items;
    this._renderTodo = renderTodo;
  }

  renderItems() {
    this._items = initialTodos;
    this._items.forEach((item) => {
      this._renderTodo(item);
    });
  }

  addItem(item) {
    this._containerSelector.append(item);
  }
}
