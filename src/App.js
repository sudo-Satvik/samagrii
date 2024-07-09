import './App.css';
import { MainCarousel } from './customer/component/HomeCarousel/MainCarousel';
import Navigation from './customer/component/NavBar/Navigation';
import HomePage from './customer/pages/HomePage';

function App() {
  return (
    <>
    <Navigation/>
    <div>
      <HomePage/>
    </div>
    </>
  );
}

export default App;
