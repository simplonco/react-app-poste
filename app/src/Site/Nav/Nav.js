import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'


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
        <Menu.Item
          name='home'
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='gallerie'
          active={this.state.activeItem === 'gallerie'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='help'
          active={this.state.activeItem === 'help'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav;