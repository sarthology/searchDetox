import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadComponent } from './payload.component';

describe('PayloadComponent', () => {
  let component: PayloadComponent;
  let fixture: ComponentFixture<PayloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
