import React from 'react'
import torta from '../components/img/torta.png';
import { GASTOS } from '../constans';
import '../Style/PresupuestoTotal.css'
import ListadoDeGastos from './ListadoDeGastos';
//import { Pie } from 'react-chartjs-2';


export const PresupuestoTotal = ({ presupuesto, setAbrirModal, irPresupuestoTotal, gastos, disponible, gastado }) => {
    const { montoIngresado } = presupuesto;

    const opcion = {
        responsive: true
    }
    return (
        <>
            <div className='muestra'>
                <h1>Planificador de presupuesto</h1>

                <div className='tituloPresupuesto'>
                    <div className="torta">
                        <img src={torta} alt="" />
                    </div>
                    <div className="planificador">
                        <h5>Total Presupuesto:</h5>
                        <p>{montoIngresado}</p>

                        <h5>
                            Disponible:
                        </h5>
                        <p>{disponible}</p>
                        <h5>
                            Gastado:
                        </h5>
                        <p>{gastado}</p>
                    </div>
                </div>
                <div className="buttonAgregar">
                    <button className='openModal' onClick={() => { setAbrirModal(true) }}><span>Agregar Gasto</span></button>
                </div>
                {irPresupuestoTotal && (
                    <div>
                        <ListadoDeGastos
                            gastos={gastos}
                        />
                    </div>
                )}
              
            </div>
        </>
    )
}

export default PresupuestoTotal;