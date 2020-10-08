import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsFormComponent } from './event-details-form.component';

describe('EventDetailsFormComponent', () => {
  let component: EventDetailsFormComponent;
  let fixture: ComponentFixture<EventDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
