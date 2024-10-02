import './App.css';
import React from 'react' 
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';







function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='/fotos' element={<Fotos/>}/>
      <Route path='/detalhes/:id'element={<Detalhes/>}></Route>
    </Routes>
    </BrowserRouter>
      
      
    
);
}

export default App;
