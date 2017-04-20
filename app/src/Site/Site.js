import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';

// Importer les différents components qu'on
// a créé
import Items from './Items/Items.js';

// Déclarer la Class de notre site.


class Site extends Component {
  render () {
    return (
      <div>
        <Items/>
      </div>
    )
  }
}

export default Site;