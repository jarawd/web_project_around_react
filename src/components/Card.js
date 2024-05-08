export default function Card(props) {
  return (
    <div className="elements__card">
      <img
        onClick={() => {
          props.onCardClick(props.card);
        }}
        className="elements__img"
        src={props.link}
        alt={props.name}
      />
      <div className="elements__info">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__container-likes">
          <div className="elements__like"></div>
          <div className="elements__likes-counter">{props.likes.length}</div>
        </div>
      </div>
    </div>
  );
}
