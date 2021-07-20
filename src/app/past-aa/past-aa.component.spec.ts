import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAAComponent } from './past-aa.component';

describe('PastAAComponent', () => {
  let component: PastAAComponent;
  let fixture: ComponentFixture<PastAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastAAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
