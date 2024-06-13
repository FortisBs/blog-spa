import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";

const selectArticlesState = (state: AppState) => state.articles;

export const selectArticlesData = createSelector(
  selectArticlesState,
  ({ articlesData }) => articlesData,
);

export const selectArticleDetails = createSelector(
  selectArticlesState,
  ({ articleDetails }) => articleDetails,
);
