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
    this.state = {
      cart: [],
      click: 0
    };
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

  // addToCart = (productName, productPrice) => {
  //   // Il y a deja des bottes dans mon panier
  //   // let newCart = [ {name: 'bottes', price: 108} ]
  //   let newCart = this.state.cart;
  //   // newCart -> [{name: 'bottes', price: 108}, {name: 'sac', price: 132}]
  //   newCart.push({
  //     name: productName,
  //     price: productPrice
  //   });
  //   // J'actualise mon state avec mon nouveau panier.
  //   this.setState({cart: newCart});
  // }

  // J'ajoute des produits à mon panier
  addToCart = (productPrice) => {
    // je declare une variable newCart qui va prendre la valeur de mon panier actuel
    let newCart = this.state.cart;
    // Je rajoute le nouveau prix du produit à mon panier
    newCart.push(productPrice);
    // J'actualise mon state avec le nouveau panier
    this.setState({cart: newCart});
  }


  // J'incrémente mon click en passant la fonction à chaque enfant qui l'utiliserons
  incrementClick = () => {
    // let newClick = 0; (ou la valeur à laquelle est this.state.click)
    let newClick = this.state.click;
    // newClick + 1
    newClick ++;
    // this.state.click -> 1
    this.setState({
      click: newClick
    });
  }

  consoleProductName = (productName) => {
    // Cette fonction doit console.log le nom d'un produit
    // Il faudra l'ajouter en props à chaque <Product console={this.consoleProductName}/>
    // Dans le component Product on va créer une fonction pour relayer le nom du produit
    // Cette fonction va appeler this.props.console avec le bon argument (this.props.name)
  }


  componentDidUpdate () {
    // A quoi ressemble mon panier quand il est actualisé
    console.log(this.state.cart);
  }

  render () {
    return (
      <div className="shop">
        <Cart click={this.state.click}/>
        {
          /* On passe à l'enfant la fonction d'incrémenter le click, chaque produit aura accés à cette fonction */
          /* On passe la fonction de rajouter au panier à l'enfant */
          this.state.products.map(
            (product, i) => <Product key={i} price={product.price} name={product.name} add={this.addToCart} increment={this.incrementClick}/>
          )
        }
      </div>
    )
  }
}

export default Shop;