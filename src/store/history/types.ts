export type History = {
  id: number;
  expression: string;
  createdAt: Date;
  userId: number;
};

export type HistoryList = [
  {
    id: number;
    expression: string;
    createdAt: Date;
    userId: number;
  }
];

export const USER_HISTORY_FETCHED = "USER_HISTORY_FETCHED";

export const EXPRESSION_POST_SUCCESS = "EXPRESSION_POST_SUCCESS";

type UserHistoryAction = {
  type: typeof USER_HISTORY_FETCHED;
  payload: {}[];
};

type PostExpressionAction = {
  type: typeof EXPRESSION_POST_SUCCESS;
  payload: {};
};

export type HistoryAction = UserHistoryAction | PostExpressionAction;
