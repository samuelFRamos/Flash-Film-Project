import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Contato from './pages/contato';
import Fotos from './pages/fotos';
import Comentarios from './pages/comentarios';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fotos' element={<Fotos />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/comentarios' element={<Comentarios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
