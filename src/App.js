import React from 'react';
import { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import {Page3} from './components/Page3';

class App extends Component{
    
  render(){
    return(
      <div>
   
    
    <Router>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/Page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
      </Routes>
    </Router> 
    
    </div>
    )
  }
  }

export default App;
