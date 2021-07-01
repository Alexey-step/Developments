import { ThunkAction } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { APIRoutes, Status } from "../../const";
import { ActionTypes } from "../actions";
import * as ActionCreators from "../action-creators";

type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  unknown,
  AxiosInstance,
  ActionTypes
>;

export const fetchCards = (): AppThunk => async (dispatch, _getState, api) => {
  dispatch(ActionCreators.setStatus(Status.LOAD));
  try {
    const { data } = await api.get(`${APIRoutes.CARDS}`);
    dispatch(ActionCreators.setCards(data));
    dispatch(ActionCreators.setStatus(Status.LOADED));
  } catch (e) {
    dispatch(ActionCreators.setStatus(Status.ERROR));
  }
};
