import React from 'react';
import { useEffect } from 'react';

const CalcularPresupuesto = ({ presupuesto, gastos, disponible, setDisponible, setGastado, setCalcularPorcentaje }) => {

    const { cantidad_presupuesto } = gastos
    const { montoIngresado } = presupuesto;
    const datoIngresado = Number(montoIngresado);
    console.log(datoIngresado);


    useEffect(() => {
        const presupuestoGastado = gastos.reduce((total, gasto
        ) => parseInt(gasto.cantidad_presupuesto) + total, 0)
        console.log(presupuestoGastado);
        {
            presupuestoGastado == 0 ? (setDisponible(presupuestoGastado)) : (
                setDisponible(datoIngresado - presupuestoGastado)
            )
        }
        {
            presupuestoGastado == 0 ? (setCalcularPorcentaje(0)) : (
                setCalcularPorcentaje(((datoIngresado - (datoIngresado - presupuestoGastado)) / datoIngresado) * 100));

        }


        setGastado(presupuestoGastado);

    }, [gastos])
    return (
        <div></div>
    )
}

export default CalcularPresupuesto;