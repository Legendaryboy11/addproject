import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'
import Pages from './pages/Pages/Pages';
import ShopPage from './pages/OrderPage/ShopPage';
import DemoPage from './pages/DemoPage/DemoPage';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/demo' element={<DemoPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
