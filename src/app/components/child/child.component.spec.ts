import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input message', () => {
    component.message = 'Test Message';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test Message');
  });

  it('should emit an event when button is clicked', () => {
    spyOn(component.notify, 'emit');
    const button = fixture.nativeElement.querySelector('button');

    button.click();

    expect(component.notify.emit).toHaveBeenCalledWith('Hello parent!');
  })
});
