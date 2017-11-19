import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEditComponent } from './bar-edit.component';

describe('BarEditComponent', () => {
  let component: BarEditComponent;
  let fixture: ComponentFixture<BarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
