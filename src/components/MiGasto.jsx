import React from 'react';

const MiGasto = ({ gastando }) => {
    return (
        <div>
            <p> {gastando.tipo_gasto} </p>
            <p> {gastando.nombre_gasto}</p>
        </div>
    )
}

export default MiGasto;