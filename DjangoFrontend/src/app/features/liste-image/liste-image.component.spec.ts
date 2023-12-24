/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListeImageComponent } from './liste-image.component';

describe('ListeImageComponent', () => {
  let component: ListeImageComponent;
  let fixture: ComponentFixture<ListeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
