import { Jugador } from "./clase"
let jugador= new Jugador();
beforeAll(()=>{
    // console.log('beforeAll');
});
beforeEach(()=>{
    // console.log('beforeEach');
    jugador = new Jugador();
});
afterAll(()=>{
    // console.log('AfterAll');
});
afterEach(()=>{
    // console.log('AfterEach');
});
describe('Pruebas de clase', () => {
    it('Debe de retornar 80 de hp, si recibe 20 de daño',()=>{
        const resp =  jugador.recibeDanio(20);
        expect(resp).toBe(80);
    })
    xit('Debe de retornar 50 de hp, si recibe 50 de daño',()=>{
        const resp =  jugador.recibeDanio(50);
        expect(resp).toBe(50);
    })
    it('Debe de retornar 0 de hp, si recibe 100 de daño o más',()=>{
        const resp =  jugador.recibeDanio(100);
        expect(resp).toBe(0);
    })
})
