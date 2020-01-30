import React from 'react';
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import Services from './pages/services.js'
import Careers from './pages/careers.js'
import Contact from './pages/contact.js'


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
     <div>
        <Router>
  <Route exact path="/"  component={Home}   />
  <Route path="/about" component={About} />
  <Route path="/services" component={Services} />
  <Route path="/careers" component={Careers} />
  <Route path="/Contact" component={Contact} />
</Router>
     </div>
  );
}

export default App;
