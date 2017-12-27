import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import moment from 'moment';
import { defaultBreak, shortBreak, longBreak } from '../actions';
import _ from 'lodash';

class MainButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
      currentSeconds: 1500
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentDidMount() {
    this.setState({
      currentSeconds: this.props.seconds
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.seconds !== nextProps.seconds) {
      this.onResetButtonPressed();
      this.setState({
        currentSeconds: nextProps.seconds
      });
    }
  }

  tick() {
    this.setState(
      prevState => ({
        currentSeconds: prevState.currentSeconds - 1
      }),
      () => {
        if (this.state.currentSeconds === 0) this.resetInterval();
      }
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleKeyDown = e => {
    if (e.altKey) {
      switch (e.which) {
        case 80:
          this.props.defaultBreak();
          break;
        case 83:
          console.log('hello');
          this.props.shortBreak();
          break;
        case 76:
          this.props.longBreak();
          break;
        case 82:
          this.onStopButtonPressed();
          break;
        default:
          break;
      }
    } else {
      if (e.which == 32) {
        console.log('Go space');
        if (this.state.timerRunning) {
          this.onStopButtonPressed();
        } else {
          this.onStartButtonPressed();
        }
      }
    }
  };

  resetInterval() {
    clearInterval(this.timerID);
  }

  restartInterval() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  format = seconds => {
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    let timeFormated = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    return timeFormated;
  };

  onStartButtonPressed = () => {
    if (this.state.timerRunning) return;
    this.restartInterval();
    this.setState({
      timerRunning: true
    });
  };

  onStopButtonPressed = () => {
    if (!this.state.timerRunning) return;
    this.resetInterval();
    this.setState({
      timerRunning: false
    });
  };

  onResetButtonPressed = () => {
    this.resetInterval();
    this.setState({
      timerRunning: false,
      currentSeconds: this.props.seconds
    });
  };

  render() {
    const { timerRunning } = this.state;
    return (
      <div>
        <Grid textAlign="center">
          <h1 className="time-countdown">
            {this.format(this.state.currentSeconds)}
          </h1>
        </Grid>
        <br />
        <br />
        <Grid centered columns={3}>
          <Button
            color="green"
            size="massive"
            disabled={timerRunning}
            onClick={() => this.onStartButtonPressed()}
          >
            Start
          </Button>
          <Button
            color="red"
            size="massive"
            disabled={!timerRunning}
            onClick={() => this.onStopButtonPressed()}
          >
            Stop
          </Button>
          <Button
            color="grey"
            size="massive"
            onClick={this.onResetButtonPressed}
          >
            Reset
          </Button>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    seconds: state.pomodoro.seconds
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
