import { createReducer } from "@reduxjs/toolkit";
import * as ActionCreators from "./action-creators";
import { Status } from "../const";
import { Card } from "../types";

interface InitialStateTypes {
  cards: Card[];
  status: string;
}

export const InitialState: InitialStateTypes = {
  cards: [],
  status: Status.PENDING,
};

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(ActionCreators.setCards, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(ActionCreators.setStatus, (state, action) => {
      state.status = action.payload;
    });
});

export type RootState = ReturnType<typeof reducer>;
