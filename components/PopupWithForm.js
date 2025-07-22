import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ PopupSelector, handleSubmit }) {
    super({ PopupSelector });
    this._handleSubmit = handleSubmit;
    this._formEl = this._PopupElement.querySelector(".popup__form");
  }
  _getInputValues() {
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
      let values = this._getInputValues();
      this._handleSubmit(evt);
    });
  }
}
