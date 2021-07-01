import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "./actions";

export const setCards = createAction(ActionType.SET_CARDS, (data) => {
  return {
    payload: data,
  };
});

export const setStatus = createAction(ActionType.SET_STATUS, (status) => {
  return {
    payload: status,
  };
});
