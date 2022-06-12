import { useState } from 'react';
import './App.css';
import Grafica from './components/Grafica';
import Header from './components/Header';
import IngresoPresupuesto from './components/IngresoPresupuesto';
import PresupuestoTotal from './components/PresupuestoTotal';
//import plus from './components/img/plus.jpg';
import Modal from './components/Modal';
import ListadoDeGastos from './components/ListadoDeGastos';
import CalcularPresupuesto from './components/CalcularPresupuesto';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [irPresupuestoTotal, setIrPresupuestoTotal] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false)
  const [gastos, setGastos] = useState([]);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const nuevoGasto = (gasto) => {
    setGastos([...gastos, gasto])
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
      />
      {abrirModal && (<Modal nuevoGasto={nuevoGasto} closeModal={setAbrirModal} />)}
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

            />
          </div>
        </>) :
        (<Grafica />) && (<IngresoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          irPresupuestoTotal={irPresupuestoTotal}
          setIrPresupuestoTotal={setIrPresupuestoTotal}
        />)}


    </div>
  );

}

export default App;
