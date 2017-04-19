import React, { Component } from 'react';
import {Router, Route, Redirect} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

// import React from 'react';
// Component = React.Component
// Class est ici une sorte de "sucre syntaxique".
// Cette class Component est celle que l'on va utiliser pour initier tout nos components.

// J'importe un component que j'ai déjà pré-défini
// Attention à toujours garder une majuscule pour le nom de nos components
// import Test from './Test/Test.js';
// import Shop from './Shop/Shop.js';

// que sur localhost:3000/about
import About from './About/About.js';
// que localhost:3000/
import Header from './Header/Header.js';
// localhost:3000/home et sur localhost:3000/
import Home from './Home/Home.js';
// sur toutes les routes qui commencent par : localhost:3000/
import Nav from './Nav/Nav.js';

class RouterComponent extends Component {

  componentWillMount () {
    // $.post('www.site.com/api/authenticate', function (data) {
    //   if (data) userConnected = true;
    // });
    this.setState({
      userConnected: false
    }); 
  }

  render() {
    return (
      <Router history={history}>
        {
          /*le Router a besoin d'une div unique comme enfant.
          cette div contiendra toutes nos routes.*/
        }
        <div>
          <Route exact path="/" component={Header} />
          <Route path="/" component={Nav}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/home" component={Home}/>
          {
            /* Conditionnal rendering : je n'affiche que via une condition */
            this.state.userConnected ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/" />
            )
          }
        </div>
        {
          /* Pour commenter du JSX c'est comme du CSS */ 
          /* <Test quoi="react" comment="bien"/> */
        }
      </Router>
    );
  }
}

export default RouterComponent;
