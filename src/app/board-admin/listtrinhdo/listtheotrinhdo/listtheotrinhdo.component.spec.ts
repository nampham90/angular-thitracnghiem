import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListtheotrinhdoComponent } from './listtheotrinhdo.component';

describe('ListtheotrinhdoComponent', () => {
  let component: ListtheotrinhdoComponent;
  let fixture: ComponentFixture<ListtheotrinhdoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtheotrinhdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtheotrinhdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
