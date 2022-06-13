import React from 'react';
import '../Style/MiGasto.css'

import imagenAlimento from './img/icono_alimento.png';
import imagenSalud from './img/icono_educacion.png';
import imagenNeflix from './img/icono_vacaciones.png';
import imagenAhorro from './img/icono_educacion.png';
import imagenEntretenimiento from './img/icono_alimento.png';
import imagenVacaciones from './img/icono_vacaciones.png';
import imagenEducacion from './img/icono_educacion.png';
import imagenServicios from './img/icono_alimento.png';
import imagenVivienda from './img/icono_vacaciones.png';
import imagenHogar from './img/icono_educacion.png';

const selectImagenes = {
    Alimentacion: imagenAlimento,
    Salud: imagenSalud,
    Netflix: imagenNeflix,
    Ahorro: imagenAhorro,
    Entretenimiento: imagenEntretenimiento,
    Vacaciones: imagenVacaciones,
    Educacion: imagenEducacion,
    Servicios: imagenServicios,
    Vivienda: imagenVivienda,
    Hogar: imagenHogar
}
const selectFecha = {
    Alimentacion: "13/06/2022",
    Salud: "13/06/2022",
    Netflix: "13/06/2022",
    Ahorro: "13/06/2022",
    Entretenimiento: "13/06/2022",
    Vacaciones: "13/06/2022",
    Educacion: "13/06/2022",
    Servicios: "13/06/2022",
    Vivienda: "13/06/2022",
    Hogar: "13/06/2022"
}

const MiGasto = ({ gastando }) => {
    return (
        <div className='miGasto'>
            <div className="gastos">
                <div className="foto"> <h6>Foto</h6>
                    <img src={selectImagenes[gastando.tipo_gasto]} alt="foto-gastos" />
                </div>
                <div className="cantidadCategoria">
                    <h6>Categoria</h6>
                    <h4> {gastando.tipo_gasto} </h4>
                    <h6>Fecha</h6>
                    <h6>{`${selectFecha[gastando.tipo_gasto]}`}</h6>
                </div >

                <div className="total">
                    <h5> $ {gastando.cantidad_presupuesto}</h5>
                </div>
            </div>
        </div>
    )
}

export default MiGasto;