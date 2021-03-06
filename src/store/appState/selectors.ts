import { RootState } from "../types";

export const selectAppLoading = (state: RootState) => state.appState["loading"];
export const selectMessage = (state: RootState) => state.appState["message"];
