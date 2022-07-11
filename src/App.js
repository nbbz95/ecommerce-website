import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>

      <Route path="/" element={<ItemListContainer greeting={'HOME'}/>}/>
      <Route path="/descripcion/:idcategoria" element={<ItemListContainer/>}/>
      <Route path="/Item/:iditem" element={<ItemDetailContainer />}/>

    </Routes>

  </BrowserRouter>
  );
}

export default App;
