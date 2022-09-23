import '../styles/App.css';
import Navbar from './content/Navbar';
import Inicio from './Inicio';
import Home from './Home';
import ProductContainer from './ProductContainer';
import Footer from './content/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <ProductContainer />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
