import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearMePage } from './near-me.page';

describe('NearMePage', () => {
  let component: NearMePage;
  let fixture: ComponentFixture<NearMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
