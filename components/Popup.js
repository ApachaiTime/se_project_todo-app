export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = popupSelector;
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  open() {
    document.addEventListener("keydown", this._handleEscapeClose);
    this._popupElement.classList.add("popup_visible");
  }
  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeBtn = this._popupElement.querySelector(".popup__close");
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
    closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
