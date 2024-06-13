import { Article, ArticlesResponse } from "../../shared/api";
import { createReducer, on } from "@ngrx/store";
import {
  loadArticle,
  loadArticleError,
  loadArticles,
  loadArticlesError,
  loadArticlesSuccess,
  loadArticleSuccess
} from "../actions/articles.actions";

export interface ArticlesState {
  articlesData: ArticlesResponse | null;
  articlesLoading: boolean;
  articleDetails: Article | null;
  articleLoading: boolean;
}

export const initialState: ArticlesState = {
  articlesData: null,
  articlesLoading: false,
  articleDetails: null,
  articleLoading: false,
};

export const articlesReducer = createReducer(
  initialState,

  // Load Articles Data
  on(loadArticles, (state) => ({ ...state, articlesLoading: true })),
  on(loadArticlesSuccess, (state, { articlesData }) => ({ ...state, articlesData, articlesLoading: false })),
  on(loadArticlesError, (state) => ({ ...state, articlesLoading: false })),

  // Load Article Details
  on(loadArticle, (state) => ({ ...state, articleLoading: true })),
  on(loadArticleSuccess, (state, { articleDetails }) => ({ ...state, articleDetails, articleLoading: false })),
  on(loadArticleError, (state) => ({ ...state, articleLoading: false })),
);
