import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMathComponent } from './past-math.component';

describe('PastMathComponent', () => {
  let component: PastMathComponent;
  let fixture: ComponentFixture<PastMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
