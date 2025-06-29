# Simple Todo App
# ✅ ToDo App - Task Tracker

A simple and effective ToDo App built with **vanilla JavaScript**. This project demonstrates the use of **functions**, **object-oriented programming (OOP)**, and **form validation** to manage tasks in a user-friendly interface.

## 📌 Features

- Add, complete, and delete tasks
- Input validation with custom error messages
- Clean and responsive UI

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

Modular and reusable functions help handle:

- Form input validation
- DOM element creation

### 🧱 Object-Oriented Programming

The app structure is centered around a `TodoApp` class and a `FormValidator` class:
class FormValidator {
  constructor(form) {
    this.form = form;
    this.fields = form.querySelectorAll("input");
  }

  validate() {
    this._inputList((inputElement) => {
      // Individual field validations
    });
  }

  showError(input, message) {
    // Displays error messages
  }

  hideError(input) {
    // Hides input error message
  }
}


Link to my ToDoApp: https://apachaitime.github.io/se_project_todo-app/
