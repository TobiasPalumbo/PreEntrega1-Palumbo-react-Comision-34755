import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from '../Component/Content/NavBar/Navbar';
import Footer from '../Component/Content/Footer/Footer';
import Product from '../Component/Product';
import Inicio from '../Component/Pages/Inicio/Inicio';
import Sale from '../Component/Pages/Sale/Sale';
import Shop from '../Component/Pages/Shop/Shop';
import About from '../Component/Pages/About/About';
import Contact from '../Component/Pages/Contact/Contact';
import Carrito from '../Component/Content/Carrito/Carrito';
import NotFound from '../Component/Content/NotFound/NotFound';
import Categoria from '../Component/Pages/Categoria/Categoria';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/shop' element={<Shop />}  />
          <Route path='/categorias/:marca' element ={<Categoria />} />
          <Route path='/producto/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
