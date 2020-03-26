/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpcardComponent } from './httpcard.component';

describe('HttpcardComponent', () => {
  let component: HttpcardComponent;
  let fixture: ComponentFixture<HttpcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
