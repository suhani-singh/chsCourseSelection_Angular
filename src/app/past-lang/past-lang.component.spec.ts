import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLangComponent } from './past-lang.component';

describe('PastLangComponent', () => {
  let component: PastLangComponent;
  let fixture: ComponentFixture<PastLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastLangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
