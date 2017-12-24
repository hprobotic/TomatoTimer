import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

class TimeCountdown extends Component {

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
      <Grid textAlign='center'>
        <h1 className='time-countdown'>{this.props.time.minutes}:{this.props.time.seconds}</h1>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here will show up as props inside of MainFeatures
  return {
    time: state.time
  }
}

export default connect(mapStateToProps)(TimeCountdown);