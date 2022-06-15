import { useState, useEffect } from 'react';
import './App.css';
import { obtenerId } from './constans/id_fecha';
import Grafica from './components/Grafica';
import Header from './components/Header';
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


  useEffect(() => {
    if (Object.keys(editar).length > 0) {
      setAbrirModal(true);
      setModoEdicion(true);
    }
  }, [editar]);

  const gastoEliminado = (idEliminar) => {
    const actualizarGastos = gastos.filter(gasto => gasto.idUnica !== idEliminar)
    console.log(actualizarGastos);
    setGastos(actualizarGastos);
  }

  const nuevoGasto = (gasto) => {
    if (modoEdicion == true) {
      //actualizar gastos
      const actualizarGastos = gastos.map(item =>
        item.idUnica != gasto.idUnica ? gasto : item)
      setGastos(actualizarGastos);
      console.log(actualizarGastos)
      console.log(gasto);
      setEditar({});
      setModoEdicion(false);
    } else {
      //nuevo gasto
      gasto.idUnica = obtenerId();
      setGastos([...gastos, gasto])
    }
  }


  return (
    <div className="App">

      <Header />
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
      />)}
      {/* {abrirModal && (setEditar({}))} */}
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
