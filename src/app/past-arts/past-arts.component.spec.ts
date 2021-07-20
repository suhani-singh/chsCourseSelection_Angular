import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastArtsComponent } from './past-arts.component';

describe('PastArtsComponent', () => {
  let component: PastArtsComponent;
  let fixture: ComponentFixture<PastArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastArtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
