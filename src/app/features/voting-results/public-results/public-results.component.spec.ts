import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicResultsComponent } from './public-results.component';

describe('PublicResultsComponent', () => {
  let component: PublicResultsComponent;
  let fixture: ComponentFixture<PublicResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
