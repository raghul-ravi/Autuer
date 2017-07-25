import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolldownComponent } from './scrolldown.component';

describe('ScrolldownComponent', () => {
  let component: ScrolldownComponent;
  let fixture: ComponentFixture<ScrolldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrolldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
