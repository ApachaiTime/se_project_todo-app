import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import TodoCounter from "../components/TodoCounter.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Todo from "../components/Todo.js";
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const todosList = document.querySelector(".todos__list");
const todoCounter = new TodoCounter(initialTodos, ".counter__text");
const formPopup = new PopupWithForm({
  popupSelector: addTodoPopup,
  handleSubmit: (values) => {
    values.id = uuidv4();
    renderTodo(values);
    formPopup.close();
    todoCounter.updateTotal(true);
  },
});
formPopup.setEventListeners();
addTodoButton.addEventListener("click", () => {
  formPopup.open();
});

function handleTotal() {
  todoCounter.updateTotal();
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const generateTodo = (data) => {
  const todo = new Todo(
    data,
    "#todo-template",
    initialTodos,
    handleCheck,
    handleDelete,
    handleTotal
  );
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};

const section = new Section({
  initialTodos,
  renderTodo,
  containerSelector: todosList,
});
section.renderItems();

const todoValidator = new FormValidator(addTodoForm, validationConfig);

todoValidator.enableValidation();
