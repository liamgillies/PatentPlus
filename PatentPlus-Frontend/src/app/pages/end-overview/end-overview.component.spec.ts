import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOverviewComponent } from './end-overview.component';

describe('EndOverviewComponent', () => {
  let component: EndOverviewComponent;
  let fixture: ComponentFixture<EndOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
