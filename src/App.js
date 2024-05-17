import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Contato from './pages/contato';

import Comentarios from './pages/comentarios';
import Login from './pages/login';

import Header from './components/header/header';
import Footer from './components/footer';





function App() {
 
  return (
    <div>

      <BrowserRouter>
      <Header  />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/comentarios' element={<Comentarios />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
