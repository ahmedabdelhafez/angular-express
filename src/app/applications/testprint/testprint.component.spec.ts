import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprintComponent } from './testprint.component';

describe('TestprintComponent', () => {
  let component: TestprintComponent;
  let fixture: ComponentFixture<TestprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
