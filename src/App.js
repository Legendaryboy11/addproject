import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'
import ShopPage from './pages/ShopPage/ShopPage';
import DemoPage from './pages/DemoPage/DemoPage';
import Horseman from './book/Horseman/Horseman';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/demo' element={<DemoPage/>}/>
        <Route path='/horseman' element={<Horseman/>}/>       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
