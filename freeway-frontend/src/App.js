
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory.jsx';
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product.jsx';
import Shop from './Pages/Shop.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/assets/men_banner.png';
import women_banner from './Components/assets/women_banner.png';
import kids_banner from './Components/assets/kids_banner.png';
import all_products from './Components/assets/all_products.js';

function App() {

  console.log(all_products)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
