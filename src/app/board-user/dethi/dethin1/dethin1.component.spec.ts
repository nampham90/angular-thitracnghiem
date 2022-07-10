import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dethin1Component } from './dethin1.component';

describe('Dethin1Component', () => {
  let component: Dethin1Component;
  let fixture: ComponentFixture<Dethin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dethin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dethin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
