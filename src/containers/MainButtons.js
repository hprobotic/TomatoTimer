import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { startCountdown, stopCountdown, resetCountdown } from '../actions/index';


class MainButtons extends Component {

  // Set the date we're counting down to
  // countDown() {
  //   let now = new Date();
  //   let next_15_minutes = now.setMinutes(now.getMinutes() + 15)
  //   console.log(next_15_minutes);
  //   let x = setInterval(() => {
  //     // Find the distance between now an the count down date
  //     let distance = next_15_minutes - now;
  //     console.log('called');
  //     console.log(distance);
  //     // Time calculations for minutes and seconds
  //     this.setState({
  //       minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((distance % (1000 * 60)) / 1000)
  //     });


  // If the count down is finished, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //   }
  // }, 1000);
  // }

  render() {
    console.log(_.keys(this.props));
    console.log(_.values(this.props));
    console.log(this.props);
    return (
      <div>
        <Grid textAlign='center'>
          <h1 className='time-countdown'>{this.props.time.startedAt}</h1>
        </Grid>
        <Grid centered columns={3}>
          <Button color='green' size='massive' onClick={() => this.props.startCountdown()}>Start</Button>
          <Button color='red' size='massive' onClick={() => this.props.stopCountdown()}>Stop</Button>
          <Button color='gray' size='massive' onClick={() => this.props.resetCountdown()}>Reset</Button>
        </Grid>
      </div>
    )
  }
}


function mapStateToProps(state) {
  // Whatever is returned from here will show up as props inside of MainFeatures
  return {
    time: state.time
  }
}


// Anything returned from this function will end up as props on the MainButtons container
function mapDispatchToProps(dispatch) {
  // Whenever countDown is called, the result should be passed 
  // to all of our reducers
  return bindActionCreators({ startCountdown: startCountdown }, dispatch)
}

// Promote MainButtons from a component to a container - it needs to know about this new dispatch method, countDown. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(MainButtons)