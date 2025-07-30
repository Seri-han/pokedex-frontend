import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './pages/Home';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
