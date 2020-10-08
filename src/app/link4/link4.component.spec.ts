import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link4Component } from './link4.component';

describe('Link4Component', () => {
  let component: Link4Component;
  let fixture: ComponentFixture<Link4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
