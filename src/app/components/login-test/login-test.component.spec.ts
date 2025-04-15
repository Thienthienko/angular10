import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTestComponent } from './login-test.component';

describe('LoginTestComponent', () => {
  let component: LoginTestComponent;
  let fixture: ComponentFixture<LoginTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should be valid when a correct email is entered', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should enable the submit button when form is valid', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.disabled).toBeFalse();
  });
});
