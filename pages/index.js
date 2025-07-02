import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import ToDo from "../components/Todo.js";
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const counter = document.querySelector(".counter__text");
const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

let count = 0;

// Can not figure out how to implement the counter to work with total Todos. I can't get my objects to remove from the array and display the count
let currentTodos = initialTodos.filter((item, data) => item.id !== data.id);
if (typeof initialTodos === `object`) {
  initialTodos;
}

const generateTodo = (data) => {
  const todo = new ToDo(data, "#todo-template", counterElement, initialTodos);
  const todoElement = todo.getView();
  return todoElement;
};

const counterElement = (completed) => {
  if (completed) {
    count++;
  } else {
    count--;
  }
  counter.textContent = `Showing ${count} out of ${currentTodos.length} completed`;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
  initialTodos.push(todo);
  counter.textContent = `Showing ${count} out of ${initialTodos.length} completed`;
  todoValidator.resetValidation();
});

initialTodos.forEach((item) => {
  counter.textContent = `Showing ${count} out of ${initialTodos.length} completed`;
  if (item.completed) {
    count++;
  }
  const todo = generateTodo(item);
  todosList.append(todo);
});
console.log();

const todoValidator = new FormValidator(addTodoForm, validationConfig);

todoValidator.enableValidation();
