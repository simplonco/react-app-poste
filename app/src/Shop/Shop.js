// 1 : dossier et un fichier js pour notre component
// 2 : import React et sa class component dans notre fichier.
// 3 : déclarer la classe de mon component
// 4 : définir sa méthode render
// 5 : qui va return notre template HTML
// 6 : exporter le component

import React, {Component} from 'react';

import Cart from './Cart/Cart.js';
import Product from './Product/Product.js';


import products from './products.json'
import './shop.css';

class Shop extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    // On peut aussi bind la fonction ainsi :
    // this.changeChild = this.changeChild.bind(this);
  }

  componentWillMount () {
    // Là où se ferait les appels à notre api
    console.log(products.datas);
    this.setState({
      products: products.datas
    });
  }

  changeChild = () => {
    console.log('Je peux communiquer via le parent');
  }

  render () {
    return (
      <div className="shop">
        <Cart />
        {
          this.state.products.map(
            (product, i) => <Product key={i} price={product.price} name={product.name} add={this.changeChild}/>
          )
        }
      </div>
    )
  }
}

export default Shop;