import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarElementComponent } from './sidebar-element.component';

describe('SidebarElementComponent', () => {
  let component: SidebarElementComponent;
  let fixture: ComponentFixture<SidebarElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
