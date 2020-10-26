import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserTableComponent } from './show-user-table.component';

describe('ShowUserTableComponent', () => {
  let component: ShowUserTableComponent;
  let fixture: ComponentFixture<ShowUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
