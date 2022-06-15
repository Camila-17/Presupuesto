import React from 'react';
import { useForm } from 'react-hook-form';

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();
    const onSubmit = (data) => {

        setPresupuesto(data);
        console.log(data);
        setIrPresupuestoTotal(true)

        //reset();
    }

    return (
        <div className='formulario' >
            <form className="padreFormulario" onSubmit={handleSubmit(onSubmit)}>
                <label className="tituloCaja" >Difine presupuesto</label>
                <input className={`form-input ${errors.montoIngresado && "invalid"} cajaIngreso ` } placeholder='Digite presupuesto a gestionar'  type="number" id="presupuesto"
                    {...register("montoIngresado", {
                        required: "presupuesto es requerido", min: {
                            value: 1, message: "Debe ingresar un numero positivo",
                        }, max: {
                            value: 1000000000, message: "solo se permiten valores hasta 100",
                        },
                        pattern: {
                            value: /^[0-9]*$/
                            , message: "solo se permiten numeros",
                        }
                    })}
                    onKeyUp={() => {
                        trigger("montoIngresado");
                    }}
                />
                {errors.montoIngresado && (<small className='error'>{errors.montoIngresado.message}</small>)}
                <input className='botonIngreso' type="submit" value="Gestionar" />
            </form>
        </div>
    )
}

export default IngresoPresupuesto;