import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

class MainFeatures extends Component {
  render() {
    return (
      <Grid centered>
        <Button attached='left' size='massive' color='twitter' className='main-btn'>Pomodoro</Button>
        <Button attached='center' size='massive' color='twitter' className='main-btn'>Short Break</Button>
        <Button attached='right' size='massive' color='twitter' className='main-btn'>Long Break</Button>
      </Grid>
    );
  }
}

export default MainFeatures;