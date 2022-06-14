import React, { useReducer } from 'react';
import MiGasto from './MiGasto';

const initalState = {
    gastando:''
}

const reducer = (state , action)=>{
    return state;
}

const ListadoDeGastos = ({ gastos}) => {

    const [state , dispatch] = useReducer(reducer,initalState)

    return (

        <>
            <div>
                <input type="text"
                    name='busqueda'
                    value={state.gastando}
                    onChange={(e)=>dispatch({type: 'FILTER_TODO'})}
                />
                <h2>
                    {gastos.length ? "Lista Gastos" : "No hay gastos"}
                </h2>
                {gastos.map((gastando, index) => (
                
                    <>  
                        <MiGasto
                            key={index.id}
                            gastando={gastando} 
                            
                        />       
                    </>
                ))}
                
            </div>
        
        </>
        
        
         
       

    )
}

export default ListadoDeGastos;