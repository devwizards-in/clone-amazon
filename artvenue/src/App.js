import './App.css';
import Navbaar from './components/header/navbaar';
import Newnav from './components/newnavbaar/nawnav';
import Maincomp from './components/home/maincomp';
import Footer from './components/footer/footer';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import { Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <> 
    <Navbaar /> 
    <Newnav />

    <Routes>
      <Route path='/' element={<Maincomp />} />
      <Route path='/login' element={<Sign_in />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/getproductsone/:id' element={<Cart />} />
      <Route path='/buynow' element={<Buynow />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
