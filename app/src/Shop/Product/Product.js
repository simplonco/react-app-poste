import React, {Component} from 'react';

class Product extends Component {

  transferAdd = () => {
    // this.props.add('sac', 132)
    this.props.add(this.props.price);
  }

  render () {
    return (
      <div className="product">
        {this.props.name}<br />
        {this.props.price}<br />
        <button type="button" onClick={this.transferAdd}>Ajouter au panier</button>
      </div>
    )
  }
}

export default Product;