import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreExamComponent } from './pre-exam.component';

describe('PreExamComponent', () => {
  let component: PreExamComponent;
  let fixture: ComponentFixture<PreExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
