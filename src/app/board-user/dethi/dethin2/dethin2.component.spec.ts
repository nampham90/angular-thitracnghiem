import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dethin2Component } from './dethin2.component';

describe('Dethin2Component', () => {
  let component: Dethin2Component;
  let fixture: ComponentFixture<Dethin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dethin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dethin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
