import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="large">
        <Menu.Item header>Pomodoro</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="faq"
            active={activeItem === 'faq'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="setting"
            active={activeItem === 'setting'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
