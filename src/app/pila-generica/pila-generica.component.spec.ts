import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilaGenericaComponent } from './pila-generica.component';

describe('PilaGenericaComponent', () => {
  let component: PilaGenericaComponent;
  let fixture: ComponentFixture<PilaGenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilaGenericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
