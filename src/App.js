import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Error from './Components/Error'
import Cart from './Components/Cart';
import ProductView from './Components/ProductView';
import Singleproduct from './Components/Singleproduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/About" element={<About />} />
          <Route path='productList' element={<ProductView />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Singleproduct/:id" element={<Singleproduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
