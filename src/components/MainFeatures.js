import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Grid } from 'semantic-ui-react';
import { shortBreak, longBreak} from '../actions/index';
import { connect } from 'react-redux';

class MainFeatures extends Component {
  render() {
    return (
      <Grid centered>
        <Button attached='left' size='massive' color='twitter' className='main-btn'>Pomodoro</Button>
        <Button attached='center' size='massive' color='twitter' className='main-btn'
          onClick = {() => this.props.shortBreak()}>Short Break</Button>
        <Button attached='right' size='massive' color='twitter' className='main-btn'
          onClick = {() => this.props.longBreak()}>Long Break</Button>
      </Grid>
    );
  }
}
function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
  // Whenever countDown is called, the result should be passed 
  // to all of our reducers
  return bindActionCreators({
    shortBreak: shortBreak,
    longBreak: longBreak
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MainFeatures);