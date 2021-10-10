import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Purebas en 05-funciones',()=>{

    test('getUser Debe de retornar un objeto', () => {
        const userTest = { uid: "ABC12", username: "Arturin_12" }

        const user = getUser();

        // toEquals compara si la propiedad tiene las mismas propiedades y los mismos valores
        expect(user).toEqual(userTest)
    })


    //  getUsuarioActvio debe retornar un objeto activo

    test('getUsuarioActivo debe tetornar un objeto activo',()=>{
        const miNombre = 'Arturo'
        const userActivoTest = {
            uid: "ABC567",
            username:miNombre

        }
       let usuarioActivo =   getUsuarioActivo(miNombre)
       expect(userActivoTest).toEqual(usuarioActivo)
    })
})