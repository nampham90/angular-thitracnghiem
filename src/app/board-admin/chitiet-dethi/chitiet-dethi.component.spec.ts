import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietDethiComponent } from './chitiet-dethi.component';

describe('ChitietDethiComponent', () => {
  let component: ChitietDethiComponent;
  let fixture: ComponentFixture<ChitietDethiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietDethiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietDethiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
