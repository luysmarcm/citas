import React, {useState}  from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    })

    const [error, actualizarError] = useState(false)

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value

        })

    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();
        
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return;
        }

        actualizarError(false)

        cita.id = uuid();

        crearCita(cita);

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })


    }


    return ( 
        <>
        <h2> Crear Cita</h2>

        {error ? <p className="alerta-error"> Todos los campos som obligatorios</p> : null}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input 
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre de la Mascota"
                 onChange={actualizarState}
                 value={mascota}

            >
            
            </input>

            <label>Nombre dueño</label>
            <input
                 type="text"
                 name="propietario"
                 className="u-full-width"
                 placeholder="Nombre Dueño de la mascota"
                 onChange={actualizarState}
                 value={propietario}

            >
            
            </input>

            <label>Fecha</label>
            <input
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={fecha}

            >
            
            </input>

            <label>Hora</label>
            <input
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={hora}
                 

            >
            
            </input>

            <label>Sintomas</label>
            <textarea
                name="sintomas"
                className="u-full-width"
                onChange={actualizarState}
                value={sintomas}
            >
            </textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >
                Agregar cita
            </button>



        </form>




        </>

     );
}
 
export default Formulario;