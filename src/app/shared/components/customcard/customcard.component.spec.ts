import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcardComponent } from './customcard.component';

describe('CustomcardComponent', () => {
  let component: CustomcardComponent;
  let fixture: ComponentFixture<CustomcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
