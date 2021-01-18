import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing'
describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture:ComponentFixture<MedicoComponent>;
    beforeEach(()=>{
        
        // Libreria que simula el app.module del componente
        TestBed.configureTestingModule({
            declarations:[MedicoComponent],
            // providers:[],
            // imports:[]
        })
        fixture = TestBed.createComponent(MedicoComponent); // Tiene acceso a todo las acciones del componente, doom, html
        component = fixture.componentInstance; // Asignamos a componente una instancia del componente.
    })

    it('Debe de crearse el componente',()=>{
        expect(component).toBeTruthy();
    })
    
    it('Debe de retornar el nombre del médico',()=>{
        const nombre = 'Jorge';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
    })
})
