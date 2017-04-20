import React, {Component} from 'react';

// Quand j'utilise Semantic je dois :
// 1. installer semantic-ui-react et semantic-ui-css
// $ npm i -S semantic-ui-react semantic-ui-css
// 2. Importer directement
import 'semantic-ui-css/semantic.min.css';

// Importer les différents components qu'on a créé
import Head from './Head/Head.js';
import Items from './Items/Items.js';
import Nav from './Nav/Nav.js';

// Déclarer la Class de notre site.<
class Site extends Component {
  render () {
    return (
      <div>
        <Head/>
        <Nav />
        <Items/>
      </div>
    )
  }
}

export default Site;