import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { filter, Observable } from "rxjs";
import { Article } from "../../shared/api";
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import { selectArticleDetails } from "../../store/selectors/articles.selectors";
import { loadArticle } from "../../store/actions/articles.actions";

@Component({
  selector: 'app-article-card-details',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly store: Store<AppState> = inject(Store);

  article$: Observable<Article> = this.store.select(selectArticleDetails).pipe(filter(Boolean));

  ngOnInit(): void {
    const articleId = this.route.snapshot.params['id'];

    this.store.dispatch(loadArticle({ articleId }));
  }
}
