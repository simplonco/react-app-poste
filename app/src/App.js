import React, { Component } from 'react';
// import React from 'react';
// Component = React.Component
// Class est ici une sorte de "sucre syntaxique".
// Cette class Component est celle que l'on va utiliser pour initier tout nos components.


// J'importe un component que j'ai déjà pré-défini
// Attention à toujours garder une majuscule pour le nom de nos components
import Pomme from './Test/Test.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Pomme quoi="react" comment="bien"/>
        <Pomme quoi="les pommes" comment="pas top"/>
        <Pomme quoi="java" comment="pas trop mal"/>
        <Pomme quoi="la poste" comment="trop bien"/>
        <Pomme quoi="simplon" comment="pas mal"/>
      </div>
    );
  }
}

export default App;
