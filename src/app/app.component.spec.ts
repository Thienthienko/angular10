import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ActivatedRoute, provideRouter} from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Initial detection
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should change title when button is clicked', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toContain('WILD BLOG');
  });
});
