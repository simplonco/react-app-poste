import React, {Component} from 'react';

class Product extends Component {

  render () {
    return (
      <div className="product">
        {this.props.name}<br />
        {this.props.price * 1.2}<br />
        <button type="button" onClick={this.props.add}>Ajouter au panier</button>
      </div>
    )
  }
}

export default Product;