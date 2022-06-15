import React from 'react';
import '../Style/MiGasto.css';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
// import 'react-swipeable-list/dist/sty';

import imagenAlimento from './img/icono_alimento.png';
import imagenSalud from './img/icono_salud.png';
import imagenNeflix from './img/icono_netflix.png';
import imagenAhorro from './img/icono_ahorros.png';
import imagenEntretenimiento from './img/icono_entretenimiento.png';
import imagenVacaciones from './img/icono_vacaciones.png';
import imagenEducacion from './img/icono_educacion.png';
import imagenServicios from './img/icono_servicios.png';
import imagenVivienda from './img/icono_hogar.png';
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
    Alimentacion: "15/06/2022",
    Salud: "15/06/2022",
    Netflix: "15/06/2022",
    Ahorro: "15/06/2022",
    Entretenimiento: "15/06/2022",
    Vacaciones: "15/06/2022",
    Educacion: "15/06/2022",
    Servicios: "15/06/2022",
    Vivienda: "15/06/2022",
    Hogar: "15/06/2022"
}


const MiGasto = ({ gastando, setEditar, gastoEliminado }) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() =>
                setEditar({ gastando })}>
                Editar Gasto
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => gastoEliminado(gastando.idUnica)}>
                Eliminando Gasto
            </SwipeAction>
        </TrailingActions>
    )


    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='miGasto'>
                    <div className="gastos">

                        <div className="foto">
                            <img src={selectImagenes[gastando.tipo_gasto]} alt="foto-gastos" />
                        </div>
                        <div className="cantidadCategoria">
                            <h6 className='categoria_nombre'>Categoria</h6>
                            <h4> {gastando.tipo_gasto} </h4>
                            <h5 className='fecha'> Agregado:{`${selectFecha[gastando.tipo_gasto]}`}</h5>
                        </div >

                        <div className="total">


                            <h4> $ {gastando.cantidad_presupuesto}</h4>

                        </div>
                    </div>
                </div>
            </SwipeableListItem >
        </SwipeableList >
    )
}

export default MiGasto;