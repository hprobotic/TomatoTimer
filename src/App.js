import React, { Component } from 'react';
import { Button, Segment, Container, Menu, Item, Grid } from 'semantic-ui-react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
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
