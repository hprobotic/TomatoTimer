import React, { Component } from 'react';
import { Button, Segment, Container, Menu, Item, Grid } from 'semantic-ui-react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Grid centered>
          <Button.Group>
            <Button color='twitter' className='main-btn'>Pomodoro</Button>
            <Button color='twitter' className='main-btn'>Short Break</Button>
            <Button color='twitter' className='main-btn'>Long Break</Button>
          </Button.Group>
        </Grid>
      </div>
    );
  }
}

export default App;
