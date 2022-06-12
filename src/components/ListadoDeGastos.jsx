import React from 'react';
import SeeExpense from './expenselist/SeeExpense';
import MiGasto from './MiGasto';



const ListadoDeGastos = ({ gastos}) => {
    return (
        
        <div>
            <SeeExpense/>
            <h2>
                {gastos.length ? "Lista Gastos" : "No hay gastos"}
            </h2>
            {gastos.map((gastando, index,imagenes) => (
            
                <MiGasto
                    key={index}
                    gastando={gastando}
                    
                />
            ))}
            
            
        </div>
         
       

    )
}

export default ListadoDeGastos;