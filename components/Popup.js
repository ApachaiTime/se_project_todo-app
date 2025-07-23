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
    const popupOverlay = document.querySelector(".popup");
    const closeBtn = this._popupElement.querySelector(".popup__close");
    popupOverlay.addEventListener("click", (evt) => {
      if (evt.target === popupOverlay) {
        this.close();
      }
    });
    closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
