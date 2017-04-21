import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Head from './Head/Head.js';
import Nav from './Nav/Nav.js';
import Items from './Items/Items.js';
//import Body from './Body/Body.js';
//import Footer from './Footer/Footer.js';

class Semantic extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Items/>
      </div>
    );
  }
}

export default Semantic;
