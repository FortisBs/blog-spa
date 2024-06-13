import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticlesService } from "../../shared/services/articles.service";
import {
  loadArticle,
  loadArticleError,
  loadArticles,
  loadArticlesError,
  loadArticlesSuccess,
  loadArticleSuccess
} from "../actions/articles.actions";
import { catchError, of, switchMap } from "rxjs";

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticles),
    switchMap(({ params }) => this.articlesService.getArticles(params).pipe(
      switchMap((articlesData) => of(loadArticlesSuccess({ articlesData }))),
      catchError(() => of(loadArticlesError())))
    ))
  );

  loadArticle$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticle),
    switchMap(({ articleId }) => this.articlesService.getArticle(articleId).pipe(
      switchMap((articleDetails) => of(loadArticleSuccess({ articleDetails }))),
      catchError(() => of(loadArticleError())))
    ))
  );

  constructor(
    private readonly actions$: Actions,
    private readonly articlesService: ArticlesService
  ) {}
}
