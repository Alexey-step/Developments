import React from "react";
import { Link } from "react-router-dom";
import CardsItem from "../cards-item/cards-item";
import { AppRoutes } from "../../../const";
import { Card } from "../../../types";

import "./cards-list.scss";

interface Props {
  cards: Card[];
}

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <div className="cards__list">
      {cards.map((card) => (
        <Link
          className="cards__link"
          to={`${AppRoutes.DETAILS}/${card.id}`}
          key={card.id}
        >
          <CardsItem card={card} />
        </Link>
      ))}
    </div>
  );
};

export default CardsList;
