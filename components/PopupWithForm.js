import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super({ popupSelector });
    this._handleSubmit = handleSubmit;
    this._formEl = this._popupElement.querySelector(".popup__form");
  }
  getInputValues() {
    this._inputList = this._formEl.querySelectorAll(".popup__input");
    let values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
      let values = this.getInputValues();
      this._handleSubmit(values);
    });
  }
}
