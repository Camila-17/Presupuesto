import React from 'react';
import MiGasto from './MiGasto';
import '../Style/ListaGastos.css'

const ListadoDeGastos = ({ gastos }) => {
    return (
        
        <div className='listaGastos'>
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