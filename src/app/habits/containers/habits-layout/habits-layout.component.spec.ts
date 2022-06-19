import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsLayoutComponent } from './habits-layout.component';

describe('HabitsLayoutComponent', () => {
  let component: HabitsLayoutComponent;
  let fixture: ComponentFixture<HabitsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
