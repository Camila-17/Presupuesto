import React from 'react';
import MiGasto from './MiGasto';

const ListadoDeGastos = ({ gastos }) => {
    return (
        <div>
            <h2>
                {gastos.length ? "Lista Gastos" : "No hay gastos"}
            </h2>
            {gastos.map((gastando, index) => (
                <MiGasto
                    key={index}
                    gastando={gastando}
                />
            ))}

        </div>
    )
}

export default ListadoDeGastos;