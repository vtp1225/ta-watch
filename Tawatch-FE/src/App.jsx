import './App.css'
import { Home } from './Pages/Home.jsx';
import {Routes,Route} from 'react-router';
import { CartPage } from './Pages/CartPage.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { ProductProvider } from './Context/ProductContext.jsx';
import { LoginRegister } from './Pages/LoginRegister.jsx';
import ProductDetailPage from './Pages/ProductDetailPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import ProductManagement from './Components/Admin/ProductManament/ProductManagement.jsx';
import OrderDashboard from './Pages/OrderDashboard.jsx';
function App() {
  return (
    <>
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path='/admin/orders' element={<OrderDashboard />} ></Route>
          <Route path='/admin/products' element={<ProductManagement />} ></Route>
          <Route path='/admin' element={<DashboardPage />} />
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
