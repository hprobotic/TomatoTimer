import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import '../App.css';
import NavBar from './NavBar';
import MainFeatures from './MainFeatures';
import MainButtons from '../containers/MainButtons';
import KeyboardShortcuts from './KeyboardShortcuts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <NavBar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <MainFeatures />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <MainButtons />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <KeyboardShortcuts />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
