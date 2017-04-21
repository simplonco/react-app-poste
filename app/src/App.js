import React, { Component } from 'react';

// import React from 'react';
// Component = React.Component
// Class est ici une sorte de "sucre syntaxique".
// Cette class Component est celle que l'on va utiliser pour initier tout nos components.

// J'importe un component que j'ai déjà pré-défini
// Attention à toujours garder une majuscule pour le nom de nos components
// import Test from './Test/Test.js';
// import Shop from './Shop/Shop.js';

//import RouterComponent from './Router/Router.js'
//import SemanticComponent from './Semantic/Semantic.js';
import Site from './Site/Site.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {
          /*le Router a besoin d'une div unique comme enfant.
          cette div contiendra toutes nos routes.*/
        }
        <Site />
        {
          /* Pour commenter du JSX c'est comme du CSS */ 
          /* <Test quoi="react" comment="bien"/> */
        }
      </div>
    );
  }
}

export default App;
