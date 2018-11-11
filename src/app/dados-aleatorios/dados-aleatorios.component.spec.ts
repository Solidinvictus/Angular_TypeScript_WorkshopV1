import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAleatoriosComponent } from './dados-aleatorios.component';

describe('DadosAleatoriosComponent', () => {
  let component: DadosAleatoriosComponent;
  let fixture: ComponentFixture<DadosAleatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAleatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAleatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
