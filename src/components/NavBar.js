import React, { Component } from 'react';
import { Segment, Container, Menu, Item } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    return (
      <Segment inverted color='black' className='homepage-segment'>
        <Container>
          <Menu inverted pointing secondary>
            <h1>Tomato Timer</h1>
            <Item className='right'>
              <a href="#">FAQ</a>
              <a href="#" className='homepage-setting'>Settings</a>
            </Item>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;