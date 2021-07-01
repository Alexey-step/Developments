import React from "react";
import { useSelector } from "react-redux";
import { Status } from "../../const";
import Spinner from "../../components/UI/spinner/spinner";
import { RootState } from "../../store/reducer";
import { Card } from "../../types";

interface Props {
  cards: Card[];
}

const withSpinner = (Component: React.FC): React.FC<Props> => {
  const WithSpinner: React.FC<Props> = (props) => {
    const { status } = useSelector((state: RootState) => state);

    if (status === Status.LOAD) {
      return <Spinner />;
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return WithSpinner;
};

export default withSpinner;
