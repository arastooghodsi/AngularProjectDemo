import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTeamComponent } from './virtual-team.component';

describe('VirtualTeamComponent', () => {
  let component: VirtualTeamComponent;
  let fixture: ComponentFixture<VirtualTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
