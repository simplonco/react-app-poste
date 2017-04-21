import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import axios from 'axios';

const history = createBrowserHistory();

// Quand j'utilise Semantic je dois :
// 1. installer semantic-ui-react et semantic-ui-css
// $ npm i -S semantic-ui-react semantic-ui-css
// 2. Importer directement
import 'semantic-ui-css/semantic.min.css';

// Importer les différents components qu'on a créé
import Head from './Head/Head.js';
import Items from './Items/Items.js';
import Nav from './Nav/Nav.js';
import About from './About/About.js';
import User from './User/User.js';


// Déclarer la Class de notre site.<
class Site extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Head}/>
          <Route path="/" component={Nav} />
          <Route path="/" component={About}/>
          <Route path="/gallery" component={Items}/>
          <Route path="/user" component={User}/>
        </div>
      </Router>
    )
  }
}

export default Site;