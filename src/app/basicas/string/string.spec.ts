import { mensaje } from "./string";

// Sirve para agrupar pruebas
describe('Pruebas de Strings',()=>{

    // Prueba especifica
    it('Debe de regresar un string',()=>{
        const resp = mensaje('Jorge');
        expect(typeof resp).toBe('string')
    });
});

