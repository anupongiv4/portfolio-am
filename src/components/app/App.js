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
    <Router>
      <div className="App">
        <Banner />
          <Switch>
            <Route path="/portfolio-am" exact component={Index_main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;