import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Index from "./Components/Index/Index";

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Index /> }/>
            <Route path="/Contact" element={ <Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
