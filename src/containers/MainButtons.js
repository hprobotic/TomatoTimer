import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import moment from 'moment'
import { startCountdown, stopCountdown, resetCountdown, onTick } from '../actions/index';
import _ from 'lodash';

class MainButtons extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props.ticking);
    if (this.props.ticking) {
      console.log('inside of Did Mount');
      this.interval = setInterval(() => {
        this.props.onTick(this.props.minutes)
      }, 1000);
    }
  }

  render() {
    console.log(`Current props: ${JSON.stringify(this.props)}`);
    if (this.props.minutes === 0 || this.props.ticking === false) {
      clearInterval(this.interval);
    }
    return (
      <div>
        <Grid textAlign='center'>
          <h1 className='time-countdown'>{this.props.minutes} : {this.props.seconds}</h1>
        </Grid>
        <Grid centered columns={3}>
          {/* <Button color='green' size='massive'>Start</Button> */}
          <Button color='green' size='massive' onClick={() => this.props.startCountdown()}>Start</Button>
          <Button color='red' size='massive' onClick={() => this.props.stopCountdown()}>Stop</Button>
          <Button color='gray' size='massive' onClick={() => this.props.resetCountdown()}>Reset</Button>
        </Grid>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(`Current Redux State: ${JSON.stringify(state)}`);
  console.log(`Ticking value: ${state.timer.pomodoro.ticking}`);
  console.log(`Minutes: ${state.timer.pomodoro.display.minutes}`);
  console.log(`Seconds: ${state.timer.pomodoro.display.seconds}`);

  // Whatever is returned from here will show up as props inside of MainButtons
  return {
    minutes: state.timer.pomodoro.display.minutes,
    seconds: state.timer.pomodoro.display.seconds,
    ticking: state.timer.pomodoro.ticking
  }
}


// Anything returned from this function will end up as props on the MainButtons container
function mapDispatchToProps(dispatch) {
  // Whenever countDown is called, the result should be passed 
  // to all of our reducers
  return bindActionCreators({
    startCountdown: startCountdown,
    onTick: onTick,
    stopCountdown: stopCountdown,
    resetCountdown: resetCountdown
  }, dispatch)
}

// Promote MainButtons from a component to a container - it needs to know about this new dispatch method, countDown. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(MainButtons)