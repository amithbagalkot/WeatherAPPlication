import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachCitynameComponent } from './serach-cityname.component';

describe('SerachCitynameComponent', () => {
  let component: SerachCitynameComponent;
  let fixture: ComponentFixture<SerachCitynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachCitynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachCitynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
