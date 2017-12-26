import React from 'react'
import { Modal, Button, Icon, Header, Input, Grid } from 'semantic-ui-react'

const Setting = () => (
  <Modal trigger={<a id='setting'>Setting</a>} closeIcon actions={[
    'Cancel']}>
    <Header icon='setting' content='Application Setting' />
    <Modal.Content>
      <Modal.Description>
        <h3>Set Custom Times(In Minutes)</h3>
        <Grid>
          <Grid.Row>
            <Input id='time_pomodoro' type='number' min='1' step='1' size='mini' label='Pomodoro'>
            </Input>
            <Input id='time_shortbreak' type='number' min='1' step='1' size='mini' label='Short Break'>
            </Input>
            <Input id='time_longbreak' type='number' min='1' step='1' size='mini' label='Long Break'>
            </Input>
          </Grid.Row>
        </Grid>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='blue'>
        <Icon name='repeat' /> Reset
      </Button>
      <Button color='green' onClick={() => {alert('abc')}}>
        <Icon name='checkmark' /> Save
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Setting
