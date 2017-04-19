import React, {Component} from 'react';

class Product extends Component {

  transferAdd = () => {
    // this.props.add('sac', 132)
    // Je passe le nom et le prix de mon produit (this, une instance de ma classe Product)
    // à la fonction this.props.add qui elle même est la fonction addToCart de mon component Shop
    this.props.add(this.props.name, this.props.price);
    this.props.console(this.props.name)
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