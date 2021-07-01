import React from "react";
import { Card } from "../../../types";

import "./cards-item.scss";

interface Props {
  card: Card;
}

const CardsItem: React.FC<Props> = ({ card }) => {
  const { title, address, price, type } = card;

  return (
    <article className="cards__item card">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src="https://via.placeholder.com/300x150/1a49ad/FFFFFF?text=house"
          alt="development object"
        />
        <p
          className={`card__type ${
            type === "SupportAvailable" && "card__type--support"
          }`}
        >
          {type}
        </p>
      </div>
      <div className="card__wrapper">
        <h3 className="card__title">{title}</h3>
        <p className="card__address">{address}</p>
        <p className="card__text">
          New Properties for Sale from
          <span className="card__price">£{price}</span>
        </p>
        <p className="card__description">Shared Ownership Available</p>
      </div>
    </article>
  );
};

export default React.memo(CardsItem);
