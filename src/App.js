import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProductContainer from './component/ProductContainer';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default App;
