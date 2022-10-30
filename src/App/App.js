import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { AddToCartProvider } from '../Context/addToCartProvider';
import Navbar from '../Component/Content/NavBar/Navbar';
import Footer from '../Component/Content/Footer/Footer';
import Product from '../Component/Content/Product/Product';
import Inicio from '../Component/Pages/Inicio/Inicio';
import Sale from '../Component/Pages/Sale/Sale';
import Shop from '../Component/Pages/Shop/Shop';
import About from '../Component/Pages/About/About';
import Contact from '../Component/Pages/Contact/Contact';
import Carrito from '../Component/Content/Carrito/Carrito';
import NotFound from '../Component/Pages/NotFound/NotFound';
import Categoria from '../Component/Pages/Categoria/Categoria';
import { CounterProvider } from '../Context/CounterProvider';
import { TalleProvider } from '../Context/TalleProvider';
import Favoritos from '../Component/Pages/Favoritos/Favoritos';
import Checkout from '../Component/Pages/Checkout/Checkout';


function App() {
  return (
    <>
       <div className="App">
        <CounterProvider>
        <AddToCartProvider>
        <TalleProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path = '/' element = {<Inicio />} />
              <Route path = '/sale' element = {<Sale />} />
              <Route path = '/shop' element = {<Shop />}  />
              <Route path = '/categorias/:marca' element = {<Categoria />} />
              <Route path = '/producto/:id' element = {<Product />} />
              <Route path = '/about' element = {<About />} />
              <Route path = '/contact' element = {<Contact />} />
              <Route path = "/favoritos" element = {<Favoritos />} />
              <Route path = '/carrito' element = {<Carrito />} />
              <Route path = '/checkout' element = {<Checkout />} />
              <Route path = "*" element = {<NotFound />} />
            </Routes>
          <Footer />
        </BrowserRouter>
        </TalleProvider>
        </AddToCartProvider>
        </CounterProvider>
        </div>
    </>
  );
}

export default App;
