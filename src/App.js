import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
   <CartProvider>
   <BrowserRouter>
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer greeting={'HOME'}/>}/>
      <Route path="/descripcion/:idcategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer />}/>
      <Route path='./components/Cart.js' element={<Cart/>}/>

    </Routes>

  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
