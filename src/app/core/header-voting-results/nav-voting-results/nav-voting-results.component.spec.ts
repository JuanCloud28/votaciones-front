import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVotingResultsComponent } from './nav-voting-results.component';

describe('NavVotingResultsComponent', () => {
  let component: NavVotingResultsComponent;
  let fixture: ComponentFixture<NavVotingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVotingResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVotingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
