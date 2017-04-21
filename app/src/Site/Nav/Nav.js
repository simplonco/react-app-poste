import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  }

  render() {
    return (
      <Menu stackable>
        {/* Augmented components : components qui sont interprétés comme d'autres components*/}
        <Menu.Item
          as={Link}
          to="/home"
          name="home"
          active={this.state.activeItem === "home"}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/gallery"
          name="gallerie"
          active={this.state.activeItem === "gallerie"}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/help"
          name="help"
          active={this.state.activeItem === "help"}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/user"
          name="user"
          active={this.state.activeItem === "user"}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

      </Menu>
    )
  }
}

export default Nav;