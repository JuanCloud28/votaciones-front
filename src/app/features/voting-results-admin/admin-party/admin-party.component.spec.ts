import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartyComponent } from './admin-party.component';

describe('AdminPartyComponent', () => {
  let component: AdminPartyComponent;
  let fixture: ComponentFixture<AdminPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
