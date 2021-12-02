import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHistoryComponent } from './main-history.component';

describe('MainHistoryComponent', () => {
  let component: MainHistoryComponent;
  let fixture: ComponentFixture<MainHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
