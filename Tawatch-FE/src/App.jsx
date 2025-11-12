import './App.css'
import { Home } from './Pages/Home.jsx';
import {Routes,Route} from 'react-router';
import { CartPage } from './Pages/CartPage.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { ProductProvider } from './Context/ProductContext.jsx';
import { LoginRegister } from './Pages/LoginRegister.jsx';
import ProductDetailPage from './Pages/ProductDetailPage.jsx';
import AdminPage from './Pages/AdminPage.jsx';
function App() {
  return (
    <>
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/cartpage' element={<CartPage />} />
        </Routes>
      </CartProvider>
    </ProductProvider>
    </>
  )
  
}


export default App
