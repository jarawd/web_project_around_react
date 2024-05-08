import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .setProfileInfo()
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      });
  });

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  });

  return (
    <>
      <div className="profile">
        <div
          onClick={props.onEditAvatarClick}
          className="profile__image-container"
        >
          <div
            style={{ backgroundImage: `url(${userAvatar})` }}
            id="profile-image"
            className="profile__image"
          ></div>
          <div className="profile__edit-icon"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h2 className="profile__title">{userName}</h2>
            <div
              onClick={props.onEditProfileClick}
              className="profile__edit"
            ></div>
          </div>
          <p className="profile__hobby">{userDescription}</p>
        </div>
        <div onClick={props.onAddPlaceClick} className="profile__add">
          +
        </div>
      </div>
      <section className="elements">
        {cards.length > 0 &&
          cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick}
              selectedCard={props.selectedCard}
              onClose={props.onClose}
              card={card}
            />
          ))}
      </section>
    </>
  );
}

export default Main;
