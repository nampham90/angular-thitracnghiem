import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaodethiComponent } from './taodethi.component';

describe('TaodethiComponent', () => {
  let component: TaodethiComponent;
  let fixture: ComponentFixture<TaodethiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaodethiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaodethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
