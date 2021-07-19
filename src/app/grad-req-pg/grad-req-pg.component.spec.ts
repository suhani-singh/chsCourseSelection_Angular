import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradReqPgComponent } from './grad-req-pg.component';

describe('GradReqPgComponent', () => {
  let component: GradReqPgComponent;
  let fixture: ComponentFixture<GradReqPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradReqPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradReqPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
