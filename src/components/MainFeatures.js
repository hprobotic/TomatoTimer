import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Grid } from 'semantic-ui-react';
import { defaultBreak, shortBreak, longBreak } from '../actions';
import { connect } from 'react-redux';

class MainFeatures extends Component {
  render() {
    return (
      <Grid centered>
        <Button
          attached="left"
          size="massive"
          color="twitter"
          className="main-btn"
          onClick={() => this.props.defaultBreak()}
        >
          Pomodoro
        </Button>
        <Button
          size="massive"
          color="twitter"
          className="main-btn"
          onClick={() => this.props.shortBreak()}
        >
          Short Break
        </Button>
        <Button
          attached="right"
          size="massive"
          color="twitter"
          className="main-btn"
          onClick={() => this.props.longBreak()}
        >
          Long Break
        </Button>
      </Grid>
    );
  }
}
function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shortBreak: shortBreak,
      longBreak: longBreak,
      defaultBreak: defaultBreak
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFeatures);
