import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from "../../../../shared/api";
import { DatePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LimitCharactersPipe } from "../../../../shared/pipes/limit-characters.pipe";
import { HighlightKeywordsPipe } from "../../../../shared/pipes/highlight-keywords.pipe";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    LimitCharactersPipe,
    HighlightKeywordsPipe
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  @Input() article: Article;
  @Input() searchKeywords: string = '';
}
