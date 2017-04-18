// Points de vigilance :
// le dossier Test est dans src/Test
// les dossiers et fichier Test et Test.js s'écrivent avec une majuscule.
// Je n'oublie pas de vérifier de mettre ces majuscules quand je l'importe 'un autre fichier aussi.
// Il faut export mon component Test après l'avoir déclaré pour le rendre accessible pour l'import.
// "export default Test"
// Attention dans les chemins au slash à la UNIX et pas à la windows
// good -> path/file.js 
// error -> path\file.js 

import React, { Component } from 'react';

// var permet de declarer une variable
// en ES6 let permet de déclarer une variable (qu'on peut changer)
// en ES6 const permet de déclarer une constante ( une final static )



class Test extends Component {

  // Une autre des méthode du lifecycle
  // short pour propriety
  constructor (props) {
    super(props);

    this.state = {
      increment: 0,
      greeting: 'Hello',
      date: new Date()
    };
    // Une autre facon de bind une fonction qu'on a nous meme créé
    // this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  // Tick a besoin d'etre bind  à "this" (l'instance de ma classe)
  // On peut utiliser la syntaxe dans le constructor de "this.tick = this.tick.bind(this)"
  // Ou celle de la fonction flechée ES6 :
  tick = () => {
    // Si je veux incrémenter un élément de mon state, je dois l'incrémenter
    // àl'exterieur de this.setState
    let newTime = this.state.increment+1;
    this.setState({
      increment: newTime,
      date: new Date()
    });
    // Quand je veux afficher une date dans mon JSX je n'oublie pas de définir this.state.date.toLocaleTimeString
  }

  // Une des méthodes du "lifecycle" des components React qui s'appelle Render
  // Elle permet de displauy notre html
  render () {
    // On peut écrire du html directement dedans parce-que c'est un fichier jsx
    // JSX c'est une syntaxe qui a été créée par react
    // Si je veux écrire du js, je dois l'entourer de 2 accolades
    // J'tulise className plutot que class
    // Toujours besoin d'un élémént HTML unique, un seul parent, à la racine une sorte de "wrapper" qui englobe le reste
    return (

      <div className="Test">
        {this.state.greeting}, c'est {this.props.comment} {this.props.quoi} !<br />
        {this.state.date.toLocaleTimeString()}<br />
        {this.state.increment}
      </div>
    )
  }
}

// J'exporte mon component
export default Test;