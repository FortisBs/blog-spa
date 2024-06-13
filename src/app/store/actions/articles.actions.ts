import { createAction, props } from "@ngrx/store";
import { Article, ArticlesResponse, QueryParams } from "../../shared/api";

const articlesPrefix = '[Articles]';

// Load Articles Data
export const loadArticles = createAction(
  `${articlesPrefix} Load Articles`,
  props<{ params: QueryParams }>()
);
export const loadArticlesSuccess = createAction(
  `${articlesPrefix} Load Articles Success`,
  props<{ articlesData: ArticlesResponse }>()
);
export const loadArticlesError = createAction(`${articlesPrefix} Load Articles Error`);

// Load Article Details
export const loadArticle = createAction(
  `${articlesPrefix} Load Article`,
  props<{ articleId: string }>()
);
export const loadArticleSuccess = createAction(
  `${articlesPrefix} Load Article Success`,
  props<{ articleDetails: Article }>()
);
export const loadArticleError = createAction(`${articlesPrefix} Load Article Error`);
