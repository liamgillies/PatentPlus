import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionTypeComponent } from './invention-type.component';

describe('InventionTypeComponent', () => {
  let component: InventionTypeComponent;
  let fixture: ComponentFixture<InventionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
