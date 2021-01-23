import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, empty } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  class FakeRouter{
    navigate(params){}
  }
  class FaceActivatedRoute{
    params:Observable<any>= empty();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        /* Importaremos de manera separada los servicios por que queremos
        el uso de pruebas sin probar los servicios que ya vienen de angular,
        solo queremos probar los procedimientos.*/
        {provide:Router,useClass:FakeRouter}, // Solicitamos un modulo, pero especificamos que la clase del modulo sea una personalizada.
        {provide:ActivatedRoute, useClass:FaceActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Médico cuando se guarde',()=>{
    const router = TestBed.get(Router)
    const espia = spyOn(router,'navigate');
    component.guardarMedico();
    expect(espia).toHaveBeenCalledWith(['medico','123']);
  })
  
});
