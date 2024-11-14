import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;

  private apiService = inject(ApiService);

  http = inject(HttpClient);

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

  // articles$!: Observable<Article[]>;

  // http = inject(HttpClient);

  // ngOnInit() {
  //   this.getArticles();
  // }

  // getArticles() {
  //   this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
  // }
}
