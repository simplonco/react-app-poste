import React, {Component} from 'react';

class Cart extends Component {

  render () {
    return (
      <div className="cart">
        CART
        <ul>
          {
            /* Je parcours mon tableau this.props.cart avec la méthode map*/
            /* pour chaque élément je récupère l'objet d'un produit */
            /* et crée un élément de ma list avec son name et son price */
            /* {name: 'sac', price: 120} */
            /* Je n'oublie de préciser l'attribut key que react utilise pour référencer les éléments */
            this.props.cart.map(
              (product, i) => <li key={i}> {product.name} : {product.price} </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Cart;