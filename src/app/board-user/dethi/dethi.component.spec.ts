import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DethiComponent } from './dethi.component';

describe('DethiComponent', () => {
  let component: DethiComponent;
  let fixture: ComponentFixture<DethiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DethiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
