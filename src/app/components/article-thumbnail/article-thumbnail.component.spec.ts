import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThumbnailComponent } from './article-thumbnail.component';
import {ActivatedRoute, provideRouter} from "@angular/router";
import {of} from "rxjs";

describe('ArticleThumbnailComponent', () => {
  let component: ArticleThumbnailComponent;
  let fixture: ComponentFixture<ArticleThumbnailComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleThumbnailComponent],
      providers: [provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleThumbnailComponent);
    component = fixture.componentInstance;

    component.article = {
      id: 1,
      title: 'Test Article',
      content: 'Lorem ipsum',
      image: 'Image',
      createdAt: new Date(),
      isPublished: true,
      likeCount: 42,
      categoryName: 'Category',
      isLiked: true,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
