import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage } from '../../Context';
import { AppRoutes } from '../../Routes';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const App = () => {
  initializeLocalStorage();
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
