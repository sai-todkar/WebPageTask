import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Pages/About';
import Agents from './Pages/Agents';
import Property from './Pages/Property';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Landscape from './Pages/Landscape'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import VisitPopup from './Pages/VisitPopup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      {/* <Hero></Hero> */}
      <Routes>
        <Route path="/Home" element = {<Hero/>}></Route> 
        <Route path="/Agents" element = {<Agents/>}></Route>   
        <Route path="/Property" element = {<Property/>}></Route> 
        <Route path='/About' element = {<About/>}></Route>  
        <Route path='/Contact' element = {<Contact/>}></Route>
        <Route path='/Landscape' element = {<Landscape/>}></Route> 

       

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
