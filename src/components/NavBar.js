import React, { Component } from 'react';
import { Segment, Container, Menu, Item } from 'semantic-ui-react';
import Setting from './Setting'

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }
  // componentDidMount() {
  //   $(function () {
  //     $("#setting-modal").appendTo("body");
  //   });
  // }
  render() {
    return (
      <Segment inverted color='black' className='homepage-segment'>
        <Container>
          <Menu inverted pointing secondary>
            <h1>Tomato Timer</h1>
            <Item className='right'>
              <a href="#">FAQ</a>
              <Setting />
              {/* <a href="#" className='homepage-setting'>Settings</a> */}
            </Item>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;