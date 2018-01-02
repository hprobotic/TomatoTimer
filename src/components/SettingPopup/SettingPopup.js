import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import Setting from '../Setting/index'

const SettingPopup = () => (
  <Modal
    trigger={
      <Button floated="right" color="green">
        Setting
      </Button>
    }
  >
    <Modal.Header>Setting and Authentication</Modal.Header>
    <Modal.Actions>
      <Setting />
    </Modal.Actions>
  </Modal>
)

export default SettingPopup
