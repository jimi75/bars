import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAddComponent } from './bar-add.component';

describe('BarAddComponent', () => {
  let component: BarAddComponent;
  let fixture: ComponentFixture<BarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
