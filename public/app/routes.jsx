import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav';
import Home from '../home/home';
import About from '../about/about';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';

const Routes = () => (
  <Router>
    <div id="router-content">
      <Nav />
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Routes;
