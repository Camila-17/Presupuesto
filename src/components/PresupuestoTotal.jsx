import React from 'react'
import torta from '../components/img/torta.png';
import { GASTOS } from '../constans';
import '../Style/PresupuestoTotal.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import ListadoDeGastos from './ListadoDeGastos';

//import { Pie } from 'react-chartjs-2';


export const PresupuestoTotal = ({ presupuesto, setAbrirModal, irPresupuestoTotal, gastos, disponible, gastado, calcularPorcentaje }) => {
    const { montoIngresado } = presupuesto;


    return (
        <>
            <div className='muestra'>
                <h1>Planificador de Gastos</h1>

                <div className='tituloPresupuesto'>
                    <div className="torta">
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar
                                value={calcularPorcentaje}
                                text={`${calcularPorcentaje.toFixed(0)}% Total`}                             
                                backgroundPadding={6}
                                strokeWidth={12}
                                styles={buildStyles({
                                    textColor: "#000000",
                                    pathColor: '#00966B',
                                    trailColor: "#c9c9c9",
                                    textSize: '15px'
                                })}
                            />
                        </div>
                    </div>
                    <div className="planificador">
                        <h5>Total Presupuesto:</h5>
                        <p>${montoIngresado}</p>

                        <h5>
                            Disponible:
                        </h5>
                        <p>${disponible}</p>
                        <h5>
                            Gastado:
                        </h5>
                        <p>${gastado}</p>
                    </div>
                </div>
                <div className="botones">
                    <div className="buttonAgregar">
                        <button className='openModal' onClick={() => { setAbrirModal(true) }}><span>Agregar Gasto</span></button>
                    </div>
                    <div className="resetApp"><button disabled="disabled">ResetApp</button></div>
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