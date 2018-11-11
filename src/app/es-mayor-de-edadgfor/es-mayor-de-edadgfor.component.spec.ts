import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsMayorDeEdadgforComponent } from './es-mayor-de-edadgfor.component';

describe('EsMayorDeEdadgforComponent', () => {
  let component: EsMayorDeEdadgforComponent;
  let fixture: ComponentFixture<EsMayorDeEdadgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsMayorDeEdadgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsMayorDeEdadgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
