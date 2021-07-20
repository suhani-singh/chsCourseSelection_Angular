import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEnglishComponent } from './past-english.component';

describe('PastEnglishComponent', () => {
  let component: PastEnglishComponent;
  let fixture: ComponentFixture<PastEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
