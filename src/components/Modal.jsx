import React, { useState, useEffect } from 'react';
import '../Style/Modal.css';
import { useForm } from 'react-hook-form';
import { GASTOS } from '../constans';


const Modal = ({ closeModal, nuevoGasto, editar,modoEdicion, setIdEditar }) => {

    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidadGasto, setCanticadGasto] = useState("");
    const [tipoGasto, setTipoGasto] = useState("");


    const { register, formState: { errors }, handleSubmit } = useForm()

    useEffect(() => {
        if (Object.keys(editar).length > 0) {
            const { nombre_gasto, cantidad_presupuesto, tipo_gasto } = editar;
            setNombreGasto(editar.gastando.nombre_gasto);
            setTipoGasto(editar.gastando.tipo_gasto);
            setCanticadGasto(editar.gastando.cantidad_presupuesto);
            setIdEditar(editar.gastando.idUnica);

        }
    }, []);

    const onSubmit = (data) => {
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
                    {modoEdicion?( <h1 className='titleH1'>
                        Editar Gasto
                    </h1>):( <h1 className='titleH1'>
                        Agregar Gasto
                    </h1>)}
                   

                </div>

                <div className='body'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h3>Nombre de Gasto</h3>
                            <input

                                type="text" {...register('nombre_gasto',
                                    {
                                        required: true,
                                        maxLength: 15
                                    })}
                                name='nombre_gasto'
                                defaultValue={nombreGasto}

                            />
                            {/* {errors.nombre_del_gastos?.type==='required'&& <p>campo del gasto requerido </p>} */}
                        </div>
                        <div>
                            <h3>Cantidad de Gasto</h3>
                            <input type="number" {...register('cantidad_presupuesto', {
                                required: true,
                                maxLength: 10
                            })}
                                name='cantidad_presupuesto'
                                defaultValue={cantidadGasto}
                            />
                        </div>
                        <div>
                            <h3>Categoria</h3>
                            <select {...register('tipo_gasto')}
                                name='tipo_gasto'
                                defaultValue={tipoGasto}
                            >

                                <option value=""></option>

                                {GASTOS.map(gasto => (

                                    <option option
                                        key={gasto.id}
                                        value={gasto.nombre} >
                                        {gasto.nombre}
                                    </option>
                                ))}



                            </select>
                        </div>
                        <div className='footer'>
{modoEdicion?(<button className='boton' type='submit' value='Enviar'><span>Actualizar Gasto</span></button>):
(<button className='boton' type='submit' value='Enviar'><span>Agregar Gasto</span></button>)}
                            
                        </div>

                    </form>
                </div>
            </div >
        </div >

    )
}

export default Modal