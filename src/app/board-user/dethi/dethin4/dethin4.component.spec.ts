import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dethin4Component } from './dethin4.component';

describe('Dethin4Component', () => {
  let component: Dethin4Component;
  let fixture: ComponentFixture<Dethin4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dethin4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dethin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
