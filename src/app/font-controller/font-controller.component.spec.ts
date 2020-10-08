import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontControllerComponent } from './font-controller.component';

describe('FontControllerComponent', () => {
  let component: FontControllerComponent;
  let fixture: ComponentFixture<FontControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
