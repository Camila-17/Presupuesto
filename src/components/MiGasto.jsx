import React from 'react';
import imagenAlimento from '../components/img/logoSalud.png';
import imagenSalud from '../components/img/logoComida.jpeg';




const selectImagenes = {
    Alimentacion: imagenAlimento,
    Salud: imagenSalud,
    // Netflix: imagenNeflix,
    // Ahorro: imagenAhorro,
    // Entretenimiento: imagenEntretenimiento,
    // Vacaciones: imagenVacaciones,
    // Educacion: imagenEducacion,
    // Servicios: imagenServicios,
    // Vivienda: imagenVivienda,
    // Hogar: imagenHogar
}
const selectFecha = {
    Alimentacion: "13/06/2022",
    Salud: "13/06/2022",
    // Netflix: "13/06/2022",
    // Ahorro: "13/06/2022",
    // Entretenimiento: "13/06/2022",
    // Vacaciones: "13/06/2022",
    // Educacion: "13/06/2022",
    // Servicios: "13/06/2022",
    // Vivienda: "13/06/2022",
    // Hogar: "13/06/2022"
}

const reducer = (state,action) =>{
    switch (action.type) {
        case 'FILTE_TODOS': return 
    }
}

const MiGasto = ({ gastando}) => {

    const onFilterText =(e: ChangeEvent<HTMLInputElement>)=> {
    }

    return (
        <>
            <div>
                <div className="foto"> <h6>Foto</h6>
                    <img src={selectImagenes[gastando.tipo_gasto]} alt="foto-gastos" />
                </div>
                <p> {gastando.tipo_gasto} </p>
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
        </>
        
    )
}

export default MiGasto;