import { initialTodos } from "../utils/constants.js";

class ToDo {
  constructor(data, selector, counterElement, initialTodos) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._counterElement = counterElement;
    this._initialTodos = initialTodos;
  }

  _generateDate() {
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._todoElement = null;
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      if (typeof this._counterElement === `function`) {
        this._counterElement(this._data.completed);
      }
    });
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    // Checkbox elements
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    todoNameEl.textContent = this._data.name;
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    this._setEventListeners();
    this._generateDate();
    return this._todoElement;
  }
}
export default ToDo;
