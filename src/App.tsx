import {useState } from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; 
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails'; 
import CartPage from './pages/CartPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from 'react-auth-kit';

export default function App() {
  const [open, setOpen] = useState(false);  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }; 

  return (
    <AuthProvider
      authType={'localstorage'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <ToastContainer
        position="bottom-right"        
        autoClose={2000}        
        newestOnTop={false}        
        rtl={false}
        pauseOnFocusLoss={false}
      />
      <Router>
        <div className="App">
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} /> 
            <Route path="/cart/" element={<CartPage />} /> 
            <Route path="*" element={<NotFound />} />            
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};
