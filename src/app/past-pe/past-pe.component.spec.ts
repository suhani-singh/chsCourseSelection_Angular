import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPEComponent } from './past-pe.component';

describe('PastPEComponent', () => {
  let component: PastPEComponent;
  let fixture: ComponentFixture<PastPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
