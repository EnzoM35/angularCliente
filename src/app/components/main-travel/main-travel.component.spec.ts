import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTravelComponent } from './main-travel.component';

describe('MainTravelComponent', () => {
  let component: MainTravelComponent;
  let fixture: ComponentFixture<MainTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
