import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import { defaultBreak, shortBreak, longBreak } from '../../actions'
import './Timer.css'

const PROGRESS_CIRCUMFERENCE = 992.743278534

class MainButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerRunning: false,
      currentSeconds: 1500,
      timerStatus: 'init'
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  componentDidMount() {
    this.setState({
      currentSeconds: this.props.seconds
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (this.props.seconds !== nextProps.seconds) {
      this.onResetButtonPressed()
      this.setState({
        currentSeconds: nextProps.seconds
      })
    }
  }

  tick() {
    this.setState(
      prevState => ({
        currentSeconds: prevState.currentSeconds - 1
      }),
      () => {
        if (this.state.currentSeconds === 0) this.resetInterval()
      }
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleKeyDown = e => {
    if (e.altKey) {
      switch (e.which) {
        case 80:
          this.props.defaultBreak()
          break
        case 83:
          console.log('hello')
          this.props.shortBreak()
          break
        case 76:
          this.props.longBreak()
          break
        case 82:
          this.onStopButtonPressed()
          break
        default:
          break
      }
    } else {
      if (e.which === 32) {
        console.log('Go space')
        if (this.state.timerStatus === 'running') {
          this.onStopButtonPressed()
        } else {
          this.onStartButtonPressed()
        }
      }
    }
  }

  resetInterval() {
    clearInterval(this.timerID)
  }

  restartInterval() {
    clearInterval(this.timerID)
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  format = seconds => {
    let m = Math.floor((seconds % 3600) / 60)
    let s = Math.floor((seconds % 3600) % 60)
    let timeFormated = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s
    return timeFormated
  }

  onStartButtonPressed = (e) => {
    e.preventDefault();
    if (this.state.timerStatus === 'running') return
    this.restartInterval()
    this.setState({
      timerStatus: 'running'
    })
  }

  onPauseButtonPressed = (e) => {
    e.preventDefault();
    this.resetInterval()
    this.setState({
      timerStatus: 'pause'
    })
  }

  onResumeButtonPressed = (e) => {
    e.preventDefault();
    if (this.state.timerStatus === 'running') return
    this.restartInterval()
    this.setState({
      timerStatus: 'running'
    })
  }

  onStopButtonPressed = (e) => {
    e.preventDefault();
    if (!this.state.timerRunning) return
    this.resetInterval()
    this.setState({
      timerStatus: 'pause'
    })
  }

  onResetButtonPressed = (e) => {
    e.preventDefault();
    this.resetInterval()
    this.setState({
      timerStatus: 'init',
      currentSeconds: this.props.seconds
    })
  }

  render() {
    const { timerStatus, currentSeconds } = this.state
    const isCounting = timerStatus === 'running'
    const currentCircleProgress =
      PROGRESS_CIRCUMFERENCE * currentSeconds / this.props.seconds
    return (
      <div className="timer">
        <h1 className={`countdown ${isCounting ? 'animated' : 'stop'}`}>
          <svg
            viewBox="0 0 320 320"
            width="320"
            height="320"
            className="circle-svg"
          >
            <circle
              className="animate"
              id="path"
              cx="160"
              cy="160"
              r="158"
              stroke="#fff"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDashoffset={currentCircleProgress}
            />
          </svg>
          <div className="countdown-circle" />
          <div className="countdown-circle circle-2" />
          <div className="countdown-circle circle-3" />
          <div className="countdown-circle circle-4" />
          {this.format(this.state.currentSeconds)}
        </h1>
        <Grid centered columns={3}>
          {timerStatus === 'init' && (
            <Button
              size="huge"
              color="green"
              onClick={(e) => this.onStartButtonPressed(e)}
            >
              Start
            </Button>
          )}
          {timerStatus === 'running' && (
            <Button
              basic
              size="huge"
              inverted
              onClick={(e) => this.onPauseButtonPressed(e)}
            >
              Pause
            </Button>
          )}
          {timerStatus === 'pause' && (
            <Button
              size="huge"
              color="red"
              onClick={(e) => this.onResumeButtonPressed(e)}
            >
              Resume
            </Button>
          )}
          {timerStatus === 'pause' && (
            <Button
              size="huge"
              color="grey"
              onClick={this.onResetButtonPressed}
            >
              Reset
            </Button>
          )}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    seconds: state.pomodoro.seconds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shortBreak: shortBreak,
      longBreak: longBreak,
      defaultBreak: defaultBreak
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons)
