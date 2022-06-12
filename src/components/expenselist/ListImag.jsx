import React from 'react';
import Imagenes from '../img/Imagenes';
import { useState } from 'react';
import { GASTOS } from '../../constans';

const ListImag = () => {

    const[img , setImg]=useState([{GASTOS}])

    return (
        <div>
            <img src={Imagenes[1].img} />
        </div>
    )
}

export default ListImag