import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaikiemtraComponent } from './baikiemtra.component';

describe('BaikiemtraComponent', () => {
  let component: BaikiemtraComponent;
  let fixture: ComponentFixture<BaikiemtraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaikiemtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaikiemtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
