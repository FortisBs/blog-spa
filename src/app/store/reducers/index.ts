import { ActionReducerMap } from '@ngrx/store';
import { articlesReducer, ArticlesState } from "./articles.reducer";

export interface AppState {
  articles: ArticlesState;
}

export const reducers: ActionReducerMap<AppState> = {
  articles: articlesReducer,
};
