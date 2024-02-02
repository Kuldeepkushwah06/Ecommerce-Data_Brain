import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Card from './components/Card';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import BuyForm from './pages/BuyForm';
import Summary from './pages/Summary';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cards' element={<Card/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/jewelery' element={<Jewelery/>} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/buyForm' element={<BuyForm/>} />
          <Route path='/summary' element={<Summary/>}/>
        </Routes>

        <div>
          <FooterComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
