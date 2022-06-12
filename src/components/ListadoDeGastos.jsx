import React from 'react';
import SeeExpense from './expenselist/SeeExpense';
import MiGasto from './MiGasto';
import ListImag from './expenselist/ListImag';






const ListadoDeGastos = ({ gastos}) => {
    

    return (
        
        <div>
            <SeeExpense/>
            <h2>
                {gastos.length ? "Lista Gastos" : "No hay gastos"}
            </h2>
            {gastos.map((gastando, index) => (
            
                <>  <MiGasto
                    key={index.id}
                    gastando={gastando} />
                   <ListImag
                    
                    />
                </>
            ))}
             
        </div>
         
       

    )
}

export default ListadoDeGastos;