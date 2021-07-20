import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastGenElecComponent } from './past-gen-elec.component';

describe('PastGenElecComponent', () => {
  let component: PastGenElecComponent;
  let fixture: ComponentFixture<PastGenElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastGenElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastGenElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
