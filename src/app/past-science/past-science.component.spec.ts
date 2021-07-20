import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastScienceComponent } from './past-science.component';

describe('PastScienceComponent', () => {
  let component: PastScienceComponent;
  let fixture: ComponentFixture<PastScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
