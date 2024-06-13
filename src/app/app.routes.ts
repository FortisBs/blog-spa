import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'article/:id',
    loadComponent: () => import('./pages/article-details/article-details.component').then(m => m.ArticleDetailsComponent),
  },
  { path: '**', redirectTo: '' },
];
