import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultActivitieComponent } from './consult-activitie.component';

describe('ConsultActivitieComponent', () => {
  let component: ConsultActivitieComponent;
  let fixture: ComponentFixture<ConsultActivitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultActivitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultActivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
