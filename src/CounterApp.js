import React, { useState } from "react";
import PropTypes from "prop-types";

// snipett rafcp
function CounterApp({ value = 10 }) {
   const [counter, setCounter] = useState(value);
   // aumenta en 1
   const handleAdd = (e) => {
      setCounter(counter + 1);
      // sertCounter((c)=>c+1)
   };

   return (
      <>
         <h1>CounterApp</h1>
         <h2>{counter}</h2>

         <button onClick={handleAdd}>+1</button>
         <button onClick={()=>{setCounter(value)}}>Reset</button>
         <button onClick={()=>setCounter(counter -1)}>-1</button>
      </>
   );
}

CounterApp.defaultProps = {
   // value: 100,
};
CounterApp.propTypes = {
   value: PropTypes.number,
};

export default CounterApp;
