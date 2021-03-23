import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDetailsComponent } from './end-details.component';

describe('EndDetailsComponent', () => {
  let component: EndDetailsComponent;
  let fixture: ComponentFixture<EndDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
