import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonGalleryComponent } from './mason-gallery.component';

describe('MasonGalleryComponent', () => {
  let component: MasonGalleryComponent;
  let fixture: ComponentFixture<MasonGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
