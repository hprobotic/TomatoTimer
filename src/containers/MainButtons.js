import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import { startCountdown } from '../actions/index';


class MainButtons extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Button color='green' size='massive' onClick={() => this.props.startCountdown()}>Start</Button>
        <Button color='red' size='massive'>Stop</Button>
        <Button color='gray' size='massive'>Reset</Button>
      </Grid>
    );
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