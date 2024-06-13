import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { routes } from './app.routes';
import { provideStore } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { provideEffects } from '@ngrx/effects';
import { ArticlesEffects } from "./store/effects/articles.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(reducers),
    provideEffects(ArticlesEffects)
  ]
};
