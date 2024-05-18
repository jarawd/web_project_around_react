import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const user = useContext(CurrentUserContext);

  return (
    <>
      <div className="profile">
        <div
          onClick={props.onEditAvatarClick}
          className="profile__image-container"
        >
          <div
            style={{
              backgroundImage: `url(${user !== undefined && user.avatar})`,
            }}
            id="profile-image"
            className="profile__image"
          ></div>
          <div className="profile__edit-icon"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h2 className="profile__title">
              {user !== undefined && user.name}
            </h2>
            <div
              onClick={props.onEditProfileClick}
              className="profile__edit"
            ></div>
          </div>
          <p className="profile__hobby">{user !== undefined && user.about}</p>
        </div>
        <div onClick={props.onAddPlaceClick} className="profile__add">
          +
        </div>
      </div>
      <section className="elements">
        {props.cards.length > 0 &&
          props.cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick}
              selectedCard={props.selectedCard}
              onClose={props.onClose}
              card={card}
              onCardDelete={props.onCardDelete}
            />
          ))}
      </section>
    </>
  );
}

export default Main;
