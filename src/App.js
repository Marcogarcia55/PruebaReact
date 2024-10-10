import './App.css'
import React, { useState } from 'react';
import EmpleadoForm from './Components/Empleado/EmpleadoForm';
import { EmpleadoList } from './Components/Empleado/EmpleadoList';

function App() {
  const [showForm, setShowForm] = useState(false); // Estado para alternar entre la lista y el formulario

  const handleToggleView = () => {
    setShowForm(!showForm); // Cambia el valor de showForm al hacer clic en el botón
  };

  return (
    <div className='App'>
      {showForm ? (
        <div>
          <EmpleadoForm/>
          <button onClick={handleToggleView}>Volver</button>
        </div>

      ) : (
        <div>
          <EmpleadoList/>
          <button onClick={handleToggleView}>Agregar empleado</button>
        </div>
      )}
    </div>
  );
}

export default App;
