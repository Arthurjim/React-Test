import React from 'react'
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom'
describe('Pruebas en <PrimeraApp />',()=>{
    // test('Debe de mostrar el mensaje "Hola soy goku',()=>{

    //     const saludo = 'Hola, soy Goku';

    //     // const wrapper = render( <PrimeraApp saludo={saludo} />)
    //     const {getByText} = render( <PrimeraApp saludo={saludo} />)
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimerApp/> correctamente', () => {
        //shallow nos ayuda a simluar clicks o el mismo document
        const saludo = "Hola soy tu papi"
        const wrapper = shallow( <PrimeraApp saludo={saludo} />)

        // lo que hace es tomar una "captura" de lo que se tiene en el componente 
        //y lo guarda en la carpeta __snapsshot_ manda error si los dos archivos no coinciden
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de mostrar el subitulo enviado por props',()=>{
        const saludo = "Hola soy tu papi"
        const subtitulo = "Soy un subtitulo"

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />)
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe(subtitulo)
    })

})