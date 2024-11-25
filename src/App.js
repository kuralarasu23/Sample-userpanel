import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbarr from './Pages/Navbar';

function App() {
  return (
    <div>
      <Navbarr />
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
