import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'
import { saveSetting } from '../actions/index'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pomodoro: 25,
      shortbreak: 5,
      longbreak: 10
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(pomodoro, shortbreak, longbreak, closeModal) {
    this.props.saveSetting(pomodoro, shortbreak, longbreak)
    this.props.saveSetting
    closeModal()
  }

  // handleChange(event, type) {
  //   this.setState({
  //     type: event.target.value
  //   })
  // }

  render() {
    return (
      <Modal
        closeIcon={true}
        //open={this.props.open}
        onClose={this.props.close}
        trigger={
          <Button circular floated="right" icon="settings" size="big" basic />
        }
      >
        <Header icon="setting" content="Application Setting" />
        <Modal.Content>
          <Modal.Description>
            <h3>Set Custom Times(In Minutes)</h3>
            <Grid>
              <Grid.Row>
                <Input
                  value={this.state.pomodoro}
                  onChange={event => {
                    this.setState({ pomodoro: event.target.value })
                  }}
                  id="time_pomodoro"
                  type="number"
                  min="1"
                  step="1"
                  size="mini"
                  label="Pomodoro"
                />
                <Input
                  value={this.state.shortbreak}
                  onChange={event => {
                    this.setState({ shortbreak: event.target.value })
                  }}
                  id="time_shortbreak"
                  type="number"
                  min="1"
                  step="1"
                  size="mini"
                  label="Short Break"
                />
                <Input
                  value={this.state.longbreak}
                  onChange={event => {
                    this.setState({ longbreak: event.target.value })
                  }}
                  id="time_longbreak"
                  type="number"
                  min="1"
                  step="1"
                  size="mini"
                  label="Long Break"
                />
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue">
            <Icon name="repeat" />
            Reset
          </Button>
          <Button
            color="green"
            onClick={() => {
              this.handleSave(
                this.state.pomodoro,
                this.state.shortbreak,
                this.state.longbreak,
                this.props.close
              )
            }}
            //      onClick={this.props.close}
          >
            <Icon name="checkmark" />
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // Whenever countDown is called, the result should be passed to all of our
  // reducers
  return bindActionCreators(
    {
      saveSetting: saveSetting
    },
    dispatch
  )
}

// Promote MainButtons from a component to a container - it needs to know about
// this new dispatch method, countDown. Make it available as a prop.
export default connect(null, mapDispatchToProps)(Setting)
