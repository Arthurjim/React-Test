import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Prueba en <CounterApp />", () => {
    
    // let wrapper
    //se hace así para establecer el valor por defecto del  wrapper y poner tener autocompletoado
    let wrapper =shallow(<CounterApp />);
    //se ejecuta antes de cada test
    beforeEach(()=>{
         wrapper = shallow(<CounterApp />);
    })

   test("Debe ser igual el Counter app", () => {
      expect(wrapper).toMatchSnapshot();
   });

   test("Debe mostrar el valor por defecto 100 ", () => {
      const wrapper = shallow(<CounterApp value={100} />);

      const counterText = wrapper.find("h2").text().trim();
      expect(counterText).toBe("100");
   });

   test("Debe de incrementar con el boton de +1", () => {
      wrapper.find("button").at(0).simulate("click");
      const counterText = wrapper.find("h2").text().trim()  ;

      expect(counterText).toBe("11");
   });

   test("Debe de decrementar con el boton de -1", () => {
      wrapper.find("button").at(2).simulate("click");
      const counterText = wrapper.find("h2").text().trim();
    
      expect(counterText).toBe("9");
   });

   test('Debe resetear el valor del contador con el boton reset', () => {
      const wrapper = shallow(<CounterApp value={105} />);
      wrapper.find("button").at(0).simulate("click");
      wrapper.find("button").at(0).simulate("click");
     

      wrapper.find("button").at(1).simulate("click");
      const counterText = wrapper.find("h2").text().trim();
    
      expect(counterText).toBe('105')
   })
   
});
