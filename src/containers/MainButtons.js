import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import { startCountdown } from '../actions/index';
import _ from 'lodash';


class MainButtons extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getElapsedTime = this.getElapsedTime.bind(this);
  // }


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

  // componentDidMount() {
  //   this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  


  render() {
  function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
      if (!startedAt) {
        return 0;
      } else {
        return stoppedAt - startedAt + baseTime;
      }
    }
    console.log(_.keys(this.props));
    console.log(_.values(this.props));
    console.log(this.props);
    const { baseTime, startedAt, stoppedAt } = this.props;
    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

    return (
      <div>
        <Grid textAlign='center'>
          <h1 className='time-countdown'>{elapsed}</h1>
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
export default connect(null, mapDispatchToProps)(MainButtons)