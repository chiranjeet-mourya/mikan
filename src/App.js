import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from "./Component/Services/Services"
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
  <div className="App">
    {/*All Component */}
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Blog/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App