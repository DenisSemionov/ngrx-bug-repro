import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisastrousLibraryComponent } from './disastrous-library.component';

describe('DisastrousLibraryComponent', () => {
  let component: DisastrousLibraryComponent;
  let fixture: ComponentFixture<DisastrousLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisastrousLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisastrousLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
