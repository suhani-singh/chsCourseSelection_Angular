import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePgComponent } from './grade-pg.component';

describe('GradePgComponent', () => {
  let component: GradePgComponent;
  let fixture: ComponentFixture<GradePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradePgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
