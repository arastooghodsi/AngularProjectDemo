import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjExampleComponent } from './proj-example.component';

describe('ProjExampleComponent', () => {
  let component: ProjExampleComponent;
  let fixture: ComponentFixture<ProjExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
