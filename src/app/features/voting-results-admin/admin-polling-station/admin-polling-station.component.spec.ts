import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPollingStationComponent } from './admin-polling-station.component';

describe('AdminPollingStationComponent', () => {
  let component: AdminPollingStationComponent;
  let fixture: ComponentFixture<AdminPollingStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPollingStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPollingStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
