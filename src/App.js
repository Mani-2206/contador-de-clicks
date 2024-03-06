
import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter';
import { useState } from 'react';
import logoClickCounter from './images/logoClickCounter.png'

function App() {
  const  [contador, setContador] = useState(0);

  const manejarClic = () =>{
    setContador(contador +1);    
  };

  const reiniciarContador = () =>{
    setContador(0);
  };
  
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logoClickCounter} 
        alt='Logo click counter'
        />
      </div>  
      <div className='contenedor-principal'>
        <Counter
          numeroClics={contador}
        />
        <Boton
          texto='Clic'
          esBotonDeClick={true}
          manejarClic={manejarClic}
        />                    
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
            
      </div>          
    </div>
  );
}

export default App;
