import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatusComponent } from './main-status.component';

describe('MainStatusComponent', () => {
  let component: MainStatusComponent;
  let fixture: ComponentFixture<MainStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
