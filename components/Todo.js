import { initialTodos } from "../utils/constants.js";

class ToDo {
  constructor(
    data,
    selector,
    initialTodos,
    handleCheck,
    handleDelete,
    handleTotal
  ) {
    this._completed = data.completed;
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._initialTodos = initialTodos;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._handleTotal = handleTotal;
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
      this._handleTotal();
      this._todoElement = null;
      this._handleDelete(this._data.completed);
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._data.completed);
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
