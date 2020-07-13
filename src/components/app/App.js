import React from 'react';
import './App.css';
import Banner from '../portfolio/Banner/Banner';
import Mainpage from '../portfolio/mainpage/Mainpage';
import Index_main from '../portfolio/index-main';
import About from '../portfolio/About/About';
//import Contact from '../portfolio/contact/Contact';
import Footer from '../portfolio/Footer/Footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/project" component={Index_main} />
            <Route path="/about" component={About} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;