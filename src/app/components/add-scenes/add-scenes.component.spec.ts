/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddScenesComponent } from './add-scenes.component';

describe('AddScenesComponent', () => {
  let component: AddScenesComponent;
  let fixture: ComponentFixture<AddScenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
