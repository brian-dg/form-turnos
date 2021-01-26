import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita" >
        <p> <span>Mascota :</span>{cita.mascota}</p>
        <p> <span>Mascota :</span>{cita.propietario}</p>
        <p> <span>Mascota :</span>{cita.fecha}</p>
        <p> <span>Mascota :</span>{cita.hora}</p>
        <p> <span>Mascota :</span>{cita.sintomas}</p>

        <button className="button eliminar u-full-width "
        onClick={ () =>  eliminarCita (cita.id)} 
          >  Eliminar &times;  </button>
    </div>
);

 Cita.propTypes = {
     cita: PropTypes.object.isRequired,
     eliminarCita: PropTypes.func.isRequired

 }
export default Cita;