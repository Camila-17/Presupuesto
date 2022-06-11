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
                    <h1 className='titleH1'>Agregar Gasto</h1>
                </div>

                <div className='body'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h3>Nombre de Gasto</h3>
                            <input type="text" {...register('nombre_gasto', {
                                required: true,
                                maxLength: 10
                            })} />
                            {/* {errors.nombre_del_gastos?.type==='required'&& <p>campo del gasto requerido </p>} */}
                        </div>
                        <div>
                            <h3>Cantidad de Gasto</h3>
                            <input type="text" {...register('cantidad_presupuesto', {
                                required: true,
                                maxLength: 10
                            })} />
                        </div>
                        <div>
                            <h3>Categoria</h3>
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
                            {/* <button onClick={() => closeModal(false)} >Cancelar</button> */}
                            <button className='boton' type='submit' value='Enviar'><span>Agregar Gasto</span></button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Modal