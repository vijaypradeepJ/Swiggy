
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import MainPlaces from './Components/MainPlaces/MainPlaces';
import Navbar from './Components/Navbar/Navbar';
import Restaruant from './Components/Restaruant/Restaruant';
import TopRestaruant from './Components/TopRestaruant/TopRestaruant';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Home/>
      <Restaruant/>
      <TopRestaruant/>
      <MainPlaces/>
      <Footer/>
    </div>
  );
}

export default App;
