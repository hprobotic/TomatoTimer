import React, {Component} from 'react';
import {Segment, Container, Menu, Item} from 'semantic-ui-react';
import Setting from '../containers/Setting';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <Segment inverted color='black' className='homepage-segment'>
        <Container>
          <Menu inverted pointing secondary>
            <h1>Tomato Timer</h1>
            <Item className='right'>
              <a href="#">FAQ</a>
              <a onClick={() =>{this.setState({open: true})}} href="#" className='homepage-setting'>Settings</a>
              <Setting open={this.state.open}/>
            </Item>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;