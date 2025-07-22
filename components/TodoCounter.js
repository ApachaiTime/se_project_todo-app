import { initialTodos } from "../utils/constants.js";
import ToDo from "./Todo.js";
export default class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }

  updateCompleted = (increment) => {
    if (increment) {
      this._completed++;
    } else {
      this._completed--;
    }
    this._updateText();
  };
  updateTotal = (increment) => {
    if (increment) {
      this._total++;
    } else {
      this._total--;
    }
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}
