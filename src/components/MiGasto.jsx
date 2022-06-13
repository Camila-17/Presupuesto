import React from 'react';
import '../Style/MiGasto.css'

const MiGasto = ({ gastando }) => {
    return (
        <div className='miGasto'>
            <div className="gastos">
                <div className="foto"><img src="" alt="" /><h6>Foto</h6></div>
                <div className="cantidadCategoria">
                    <h6>Categoria</h6>
                    <h4> {gastando.tipo_gasto} </h4>
                    <h6>Fecha</h6>
                </div >
                {/* <p> {gastando.nombre_gasto}</p> */}
                <div className="total">
                     <h5> $ {gastando.cantidad_presupuesto}</h5>
                </div>
            </div>
        </div>
    )
}

export default MiGasto;