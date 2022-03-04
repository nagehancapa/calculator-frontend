import axios from "axios";
import { selectUser } from "../user/selectors";
import {
  HistoryAction,
  History,
  HistoryList,
  USER_HISTORY_FETCHED,
  EXPRESSION_POST_SUCCESS,
} from "./types";
import { AppThunk } from "../types";
import { showMessageWithTimeout } from "../appState/actions";

const apiUrl = "http://localhost:4000";

const userHistoryFetched = (history: HistoryList): HistoryAction => ({
  type: USER_HISTORY_FETCHED,
  payload: history,
});

const postExpressionSuccess = (history: History): HistoryAction => ({
  type: EXPRESSION_POST_SUCCESS,
  payload: history,
});

export const fetchHistoryByUserId = (id: number): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const user = selectUser(getState());
      const response = await axios.get(`${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch(userHistoryFetched(response.data.history));
      console.log(response.data.history);
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};

export const postExpression = (expression: string): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const user = selectUser(getState());
      const response = await axios.post(
        `${apiUrl}/`,
        {
          expression,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(postExpressionSuccess(response.data.history));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Expression posted successfully",
          3000
        )
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };
};
