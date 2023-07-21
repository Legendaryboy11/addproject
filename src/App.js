import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'
import Pages from './pages/Pages/Pages';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/pages' element={<Pages/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
