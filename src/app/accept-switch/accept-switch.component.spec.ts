import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptSwitchComponent } from './accept-switch.component';

describe('AcceptSwitchComponent', () => {
  let component: AcceptSwitchComponent;
  let fixture: ComponentFixture<AcceptSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
