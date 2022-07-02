import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListtrinhdoComponent } from './listtrinhdo.component';

describe('ListtrinhdoComponent', () => {
  let component: ListtrinhdoComponent;
  let fixture: ComponentFixture<ListtrinhdoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtrinhdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtrinhdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
