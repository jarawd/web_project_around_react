import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <div className="App">
      <div className="general-container">
        <div className="page">
          <Header page="page" />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            selectedCard={selectedCard}
            onClose={closeAllPopups}
          />
          {isEditAvatarPopupOpen && (
            <PopupWithForm
              isOpen={isEditAvatarPopupOpen}
              popup="popup-profile"
              popupContainer="popup-profile__container"
              close="popup-profile__close"
              title="popup-profile__title"
              text="Change profile image"
              onClose={closeAllPopups}
            >
              <form className="popup-profile__form" noValidate>
                <input
                  name="info"
                  id="popup-profile__input-info"
                  type="url"
                  className="popup-profile__form-item"
                  required
                />
                <span className="popup-profile__span-error popup-profile__input-info-error"></span>
                <button type="submit" className="popup-profile__button">
                  Save
                </button>
              </form>
            </PopupWithForm>
          )}
          {isAddPlacePopupOpen && (
            <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              popup="popup"
              popupContainer="popup__container"
              close="popup__close"
              title="popup__title"
              text="New Place"
              onClose={closeAllPopups}
            >
              <form className="popup__form" noValidate>
                <input
                  name="name"
                  type="text"
                  id="popup__input-name"
                  placeholder="Título"
                  className="popup__form-item popup__form-item_name"
                  required
                />
                <span className="popup__span-error popup__input-name-error"></span>
                <input
                  type="url"
                  name="info"
                  id="popup__input-info"
                  placeholder="Enlace de la imagen"
                  className="popup__form-item popup__form-item_info"
                  required
                />
                <span className="popup__span-error popup__input-info-error"></span>
                <button type="submit" className="popup__form-button">
                  Create
                </button>
              </form>
            </PopupWithForm>
          )}
          {isEditProfilePopupOpen && (
            <PopupWithForm
              isOpen={isEditProfilePopupOpen}
              popup="popup"
              popupContainer="popup__container"
              close="popup__close"
              title="popup__title"
              text="Edit profile"
              onClose={closeAllPopups}
            >
              <form className="popup__form" noValidate>
                <input
                  name="name"
                  type="text"
                  id="popup__input-name"
                  placeholder="Título"
                  className="popup__form-item popup__form-item_name"
                  required
                />
                <span className="popup__span-error popup__input-name-error"></span>
                <input
                  type="text"
                  name="info"
                  id="popup__input-info"
                  placeholder="Enlace de la imagen"
                  className="popup__form-item popup__form-item_info"
                  required
                />
                <span className="popup__span-error popup__input-info-error"></span>
                <button type="submit" className="popup__form-button">
                  Save
                </button>
              </form>
            </PopupWithForm>
          )}
          <ImagePopup
            popup="image-popup"
            container="image-container"
            close="image-container__close"
            title={selectedCard.name}
            onClose={closeAllPopups}
            imgPath={selectedCard.link}
            isImagePopupOpen={isImagePopupOpen}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
