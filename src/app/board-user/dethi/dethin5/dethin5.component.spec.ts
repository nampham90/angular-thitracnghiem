import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dethin5Component } from './dethin5.component';

describe('Dethin5Component', () => {
  let component: Dethin5Component;
  let fixture: ComponentFixture<Dethin5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dethin5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dethin5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
