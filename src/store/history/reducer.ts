import {
  HistoryList,
  HistoryAction,
  USER_HISTORY_FETCHED,
  EXPRESSION_POST_SUCCESS,
} from "./types";

const initialState: HistoryList = [
  {
    id: 0,
    expression: "",
    createdAt: new Date(),
    userId: 0,
  },
];

export default function artworkDetailsReducer(
  state = initialState,
  action: HistoryAction
) {
  switch (action.type) {
    case USER_HISTORY_FETCHED:
      return [...action.payload];
    case EXPRESSION_POST_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}
