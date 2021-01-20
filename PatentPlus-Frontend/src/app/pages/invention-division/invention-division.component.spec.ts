import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionDivisionComponent } from './invention-division.component';

describe('InventionDivisionComponent', () => {
  let component: InventionDivisionComponent;
  let fixture: ComponentFixture<InventionDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
