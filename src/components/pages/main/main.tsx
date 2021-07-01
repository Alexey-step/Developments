import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../../cards/cards";
import Filter from "../../filter/filter";
import RightArrowIcon from "../../UI/icons/right-arrow-icon/right-arrow-icon";
import withError from "../../../hocs/with-error/with-error";
import { RootState } from "../../../store/reducer";
import { Card } from "../../../types";

import "./main.scss";

const Main: React.FC = () => {
  const [filter, setFilter] = useState("");
  const { cards } = useSelector((state: RootState) => state);

  const activeCards: Card[] = cards.filter(
    (card) => card.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  return (
    <main className="page-main">
      <h1 className="page-main__title">Our Latest Developments</h1>
      <Filter onFilter={setFilter} />
      <Cards cards={activeCards} />
      <button className="page-main__btn" type="button">
        See more
        <RightArrowIcon />
      </button>
    </main>
  );
};

export default React.memo(withError(Main));
