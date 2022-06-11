import React from 'react';
import { useForm } from 'react-hook-form';

export const IngresoPresupuesto = ({ presupuesto, setPresupuesto, setIrPresupuestoTotal }) => {
     const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();
    const onSubmit = (data) => {
        //parseInt(data);
        setPresupuesto(data);
        console.log(data);
        setIrPresupuestoTotal(true)

        //reset();
    }

    return (
        <div className='formulario' >
            <form className="padreFormulario" onSubmit={handleSubmit(onSubmit)}>
                <label className="presupuesto" >Ingrese presupuesto</label>
                <input className={`form-input ${errors.montoIngresado && "invalid"} `} type="number" id="presupuesto"
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
                {errors.montoIngresado && (<small>{errors.montoIngresado.message}</small>)}
                <input type="submit" value="ingresar" />
            </form>
        </div>
    )
}

export default IngresoPresupuesto;