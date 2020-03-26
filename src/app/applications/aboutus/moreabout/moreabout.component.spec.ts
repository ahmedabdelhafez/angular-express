import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreaboutComponent } from './moreabout.component';

describe('MoreaboutComponent', () => {
  let component: MoreaboutComponent;
  let fixture: ComponentFixture<MoreaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
