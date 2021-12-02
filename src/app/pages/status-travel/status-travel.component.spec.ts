import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTravelComponent } from './status-travel.component';

describe('StatusTravelComponent', () => {
  let component: StatusTravelComponent;
  let fixture: ComponentFixture<StatusTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
