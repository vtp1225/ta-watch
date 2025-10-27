import './App.css'
import { Home } from './Pages/Home.jsx';
import {Routes,Route} from 'react-router';
import { CartPage } from './Pages/CartPage.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { ProductProvider } from './Context/ProductContext.jsx';
import { LoginRegister } from './Pages/LoginRegister.jsx';
function App() {
  return (
    <>
    <ProductProvider>
      <CartProvider>
        <Routes>
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
