import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Past1Component } from './past1.component';

describe('Past1Component', () => {
  let component: Past1Component;
  let fixture: ComponentFixture<Past1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Past1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Past1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
