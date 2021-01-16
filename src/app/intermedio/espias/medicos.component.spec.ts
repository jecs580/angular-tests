import { from, empty } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);
    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init Debe de cargar los médicos', () => {
        spyOn(servicio,'getMedicos').and.callFake(()=>{
            const array = ['medico1','medico2','medico3'];
            const medicos = from([array])
            return medicos
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un médico',()=>{
        const espia = spyOn(servicio,'agregarMedico').and.callFake(medico =>{
            return empty();
        })
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    })

});
