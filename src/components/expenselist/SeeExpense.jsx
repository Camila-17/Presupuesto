import React from 'react';
import { useState } from 'react';
import { GASTOS } from '../../constans';


const SeeExpense = () => {

    const [buscar,setBuscar] = useState();

    return (
        <div>
            <label>Filtrar Gasto</label>
            <select>
                <option value=""></option>
                {GASTOS.map(gasto => (
                    <option
                        key={gasto.id}
                        value={gasto.nombre}  >
                        {gasto.nombre}
                        
                    </option>
                ))}
            </select>
                       
        </div>
    );
};

export default SeeExpense;