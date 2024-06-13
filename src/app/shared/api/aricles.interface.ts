export interface ArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}

export interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string
  updated_at: string;
  featured: boolean;
  launches: ArticleLaunches[];
  events: ArticleEvents[];
}

export interface ArticleLaunches {
  launch_id: string;
  provider: string;
}

export interface ArticleEvents {
  event_id: number;
  provider: string;
}
