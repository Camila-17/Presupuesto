import React from 'react';
import '../Style/Modal.css';
import { useForm } from 'react-hook-form';
import { GASTOS } from '../constans';

const Modal = ({ closeModal, nuevoGasto }) => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        nuevoGasto(data);
        { closeModal(false) }
    }
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>

                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}> X </button>

                </div>
                <div className='title'>
                    <h1>Formulario Presupuestos</h1>
                </div>

                <div className='body'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Nombre de Gasto</label>
                            <input type="text" {...register('nombre_gasto', {
                                required: true,
                                maxLength: 10
                            })} />
                            {/* {errors.nombre_del_gastos?.type==='required'&& <p>campo del gasto requerido </p>} */}
                        </div>
                        <div>
                            <label>Cantidad de Presupuesto</label>
                            <input type="text" {...register('cantidad_presupuesto', {
                                required: true,
                                maxLength: 10
                            })} />
                        </div>
                        <div>
                            <label>Tipo de Gasto</label>
                            <select {...register('tipo_gasto')}>

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
                        <div className='footer'>
                            <button onClick={() => closeModal(false)} >Cancelar</button>
                            <button type='submit' value='Enviar'>Enviar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Modal