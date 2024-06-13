import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { ArticleCardComponent } from "../article-card/article-card.component";
import { ArticlesResponse, QueryParams } from "../../../../shared/api";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/reducers";
import { filter, Observable } from "rxjs";
import { selectArticlesData } from "../../../../store/selectors/articles.selectors";
import { loadArticles } from '../../../../store/actions/articles.actions';
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleCardComponent, AsyncPipe],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesListComponent implements OnInit {
  @Input() set searchKeywords(value: string) {
    this.searchByKeywords(value);
  }

  private readonly store: Store<AppState> = inject(Store);
  private queryParams: QueryParams = { limit: 10, offset: 0, search: '' };

  articlesData$: Observable<ArticlesResponse> = this.store.select(selectArticlesData).pipe(filter(Boolean));
  keywords: string = '';

  ngOnInit(): void {
    this.loadArticles();
  }

  loadMore(): void {
    const step = 10;

    this.queryParams = {
      ...this.queryParams,
      limit: this.queryParams['limit'] as number + step,
    };

    this.loadArticles();
  }

  private loadArticles(): void {
    this.store.dispatch(loadArticles({ params: this.queryParams }));
  }

  private searchByKeywords(search: string): void {
    this.keywords = search.trim().toLowerCase();
    this.queryParams = { ...this.queryParams, search: this.keywords };

    this.loadArticles();
  }
}
