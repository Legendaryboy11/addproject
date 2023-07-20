import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
