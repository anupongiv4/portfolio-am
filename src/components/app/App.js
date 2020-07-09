import React from 'react';
import './App.css';
import Banner from '../portfolio/Banner/Banner';
import Index_main from '../portfolio/index-main';
import About from '../portfolio/About/About';
import Contact from '../portfolio/contact/Contact';
import Footer from '../portfolio/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'} >
      <div className="App">
        <Banner />
          <Switch>
            {/* Use process.env.PUBLIC_URL in route definitions so that they work both in development and after deployment */}
            <Route exact path="/home" component={Index_main} /> 
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;