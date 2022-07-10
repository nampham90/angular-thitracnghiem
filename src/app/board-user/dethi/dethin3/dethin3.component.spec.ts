import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dethin3Component } from './dethin3.component';

describe('Dethin3Component', () => {
  let component: Dethin3Component;
  let fixture: ComponentFixture<Dethin3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dethin3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dethin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
