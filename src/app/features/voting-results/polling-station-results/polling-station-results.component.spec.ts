import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingStationResultsComponent } from './polling-station-results.component';

describe('PollingStationResultsComponent', () => {
  let component: PollingStationResultsComponent;
  let fixture: ComponentFixture<PollingStationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingStationResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingStationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
