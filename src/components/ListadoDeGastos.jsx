import React from 'react';
import MiGasto from './MiGasto';
import '../Style/ListaGastos.css'

const ListadoDeGastos = ({ gastos, setEditar, gastoEliminado }) => {
    return (

        <div className='listaGastos'>
            <h2>
                {gastos.length ? "Lista Gastos" : "No hay gastos"}
            </h2>
            {gastos.map((gastando, index) => (
                <MiGasto
                    key={index}
                    gastando={gastando}
                    setEditar={setEditar}
                    gastoEliminado={gastoEliminado}

                />
            ))}
        </div>
    )
}

export default ListadoDeGastos;