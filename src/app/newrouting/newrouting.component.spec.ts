import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewroutingComponent } from './newrouting.component';

describe('NewroutingComponent', () => {
  let component: NewroutingComponent;
  let fixture: ComponentFixture<NewroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
