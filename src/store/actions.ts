import { Card } from "../types";

export enum ActionType {
  SET_CARDS = "setCards",
  SET_STATUS = "setStatus",
}

interface SetCardsAction {
  type: ActionType.SET_CARDS;
  payload: Card[];
}

interface SetStatusAction {
  type: ActionType.SET_STATUS;
  payload: string;
}

export type ActionTypes = SetCardsAction | SetStatusAction;
