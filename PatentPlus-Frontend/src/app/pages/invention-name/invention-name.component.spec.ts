import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionNameComponent } from './invention-name.component';

describe('InventionNameComponent', () => {
  let component: InventionNameComponent;
  let fixture: ComponentFixture<InventionNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
