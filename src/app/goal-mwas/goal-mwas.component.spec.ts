import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalMwasComponent } from './goal-mwas.component';

describe('GoalMwasComponent', () => {
  let component: GoalMwasComponent;
  let fixture: ComponentFixture<GoalMwasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalMwasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalMwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
