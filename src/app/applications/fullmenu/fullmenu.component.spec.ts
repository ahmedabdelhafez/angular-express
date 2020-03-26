import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmenuComponent } from './fullmenu.component';

describe('FullmenuComponent', () => {
  let component: FullmenuComponent;
  let fixture: ComponentFixture<FullmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
