import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link5Component } from './link5.component';

describe('Link5Component', () => {
  let component: Link5Component;
  let fixture: ComponentFixture<Link5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
