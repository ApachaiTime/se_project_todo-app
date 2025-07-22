export default class Popup {
  constructor({ PopupSelector }) {
    this._PopupElement = PopupSelector;
  }
  open() {
    this._PopupElement.classList.add("popup_visible");
  }
  close() {
    this._PopupElement.classList.remove("popup_visible");
  }

  _handleEscapeClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    const popupOverlay = document.querySelector(".popup");
    const closeBtn = this._PopupElement.querySelector(".popup__close");
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
