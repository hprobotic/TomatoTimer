import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class TimeCountDown extends Component {
 // Set the date we're counting down to
  countDown(){
    // Set the date we're counting down to
    let countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
  }


  render() {
    return (
      <Grid textAlign='center'>
        <h1 className='time-countdown'>15</h1>
      </Grid>
    );
  }
}

export default TimeCountDown;