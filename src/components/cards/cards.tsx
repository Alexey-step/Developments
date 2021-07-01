import React from "react";
import CardsList from "./cards-list/cards-list";
import withSpinner from "../../hocs/with-spinner/with-spinner";
import { Card } from "../../types";

import "./cards.scss";

interface Props {
  cards: Card[];
}

const Cards: React.FC<Props> = ({ cards }) => {
  return (
    <section className="cards">
      <h2 className="visually-hidden">Developments Cards</h2>
      <CardsList cards={cards} />
    </section>
  );
};

export default React.memo(withSpinner(Cards));
