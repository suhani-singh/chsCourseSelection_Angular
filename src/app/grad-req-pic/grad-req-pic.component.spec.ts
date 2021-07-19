import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradReqPicComponent } from './grad-req-pic.component';

describe('GradReqPicComponent', () => {
  let component: GradReqPicComponent;
  let fixture: ComponentFixture<GradReqPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradReqPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradReqPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
