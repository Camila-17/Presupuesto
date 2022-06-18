import { useState, useEffect } from 'react';
import './App.css';
import { obtenerId } from './constans/id_fecha';
import IngresoPresupuesto from './components/IngresoPresupuesto';
import PresupuestoTotal from './components/PresupuestoTotal';
import Modal from './components/Modal';
import ListadoDeGastos from './components/ListadoDeGastos';
import CalcularPresupuesto from './components/CalcularPresupuesto';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [irPresupuestoTotal, setIrPresupuestoTotal] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [calcularPorcentaje, setCalcularPorcentaje] = useState(100);
  const [editar, setEditar] = useState({});
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditar, setIdEditar] = useState("");

//se activa con onClick editar
  useEffect(() => {
    if (Object.keys(editar).length > 0) {
      setAbrirModal(true);
      setModoEdicion(true);
    }
  }, [editar]);

  //elimina elemento seleccionado;
  const gastoEliminado = (idEliminar) => {
    const actualizarGastos = gastos.filter(gasto => gasto.idUnica !== idEliminar);
    setGastos(actualizarGastos);
  }
//se activa con la linea 47 (App.js), adjunta la idUnica al elemento editado;
  const gastoEditado = (editado) => {
const adjuntarIdUnica ={idUnica: idEditar} 
const objetoEditado=Object.assign(editado,adjuntarIdUnica);
return(objetoEditado);
  }

  //ingresa nuevos objetos al arreglo gastos[] o edita;
  const nuevoGasto = (gasto) => {
    if (modoEdicion == true) {
      //edita el objeto seleccionado;
      const actualizarGastos = gastos.map(item =>
        item.idUnica === idEditar ? gastoEditado(gasto) : item);
      setGastos(actualizarGastos);
      setEditar({});
      setModoEdicion(false);
    } else {
      //ingresa nuevo gasto;
      gasto.idUnica = obtenerId();
      setGastos([...gastos, gasto]);
    }
  }


  return (
    <div className="App">


      <CalcularPresupuesto
        presupuesto={presupuesto}
        gastos={gastos}
        disponible={disponible}
        setDisponible={setDisponible}
        gastado={gastado}
        setGastado={setGastado}
        calcularPorcentaje={calcularPorcentaje}
        setCalcularPorcentaje={setCalcularPorcentaje}
      />
      {abrirModal && (<Modal nuevoGasto={nuevoGasto} closeModal={setAbrirModal}
        editar={editar} modoEdicion={modoEdicion} setModoEdicion={setModoEdicion}
        idEditar={idEditar} setIdEditar={setIdEditar}
      />)}

      {irPresupuestoTotal ? (
        <>

          <div>
            <PresupuestoTotal
              presupuesto={presupuesto}
              abrirModal={abrirModal}
              setAbrirModal={setAbrirModal}
              irPresupuestoTotal={irPresupuestoTotal}
              gastos={gastos}
              disponible={disponible}
              gastado={gastado}
              calcularPorcentaje={calcularPorcentaje}
              setEditar={setEditar}
              gastoEliminado={gastoEliminado}

            />
          </div>
        </>) :
        (<IngresoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          irPresupuestoTotal={irPresupuestoTotal}
          setIrPresupuestoTotal={setIrPresupuestoTotal}
        />)}


    </div>
  );

}

export default App;
