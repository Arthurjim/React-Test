import React from "react";
import PropTypes from 'prop-types'
const PrimeraApp = ({saludo, subtitulo="SUBTITULO"}) => {
   
   // console.log(props.saludo);
   return (
      <>
         <h1>{saludo}</h1>
         {/* <pre>{ JSON.stringify(saludo) }</pre> */}
         <p>{subtitulo}</p>
      </>
   );
};

PrimeraApp.propTypes={
   saludo: PropTypes.string.isRequired
}


//props por defecto
PrimeraApp.defaultProps={
   // subtitulo: 'Soy un Subtitlo'
}

export default PrimeraApp;
