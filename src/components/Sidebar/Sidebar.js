import React from 'react'
import _ from 'lodash'
import { Button } from 'semantic-ui-react'
import './Sidebar.css'
import Setting from '../../components/Setting/index'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      showItem: 'None'
    }
  }

  showChartMenu() {
    const visible =
      this.state.showItem === 'Setting' && this.state.visible
        ? true
        : !this.state.visible
    this.setState({
      visible: visible,
      showItem: 'Chart'
    })
  }

  showSettingMenu() {
    const visible =
      this.state.showItem === 'Chart' && this.state.visible
        ? true
        : !this.state.visible
    this.setState({
      visible: visible,
      showItem: 'Setting'
    })
  }

  render() {
    let self = this
    const className = self.state.visible ? 'menuShow' : 'menuHide'
    const child = self.props.children.filter(function(ele) {
      return ele.props.name === self.state.showItem
    })
    return (
      <div>
        <div className="button">
          <Setting />
          <Button
            circular
            floated="right"
            icon="bar chart"
            size="big"
            basic
            onClick={self.showChartMenu.bind(self)}
          />
        </div>
        <div className={className}>{child}</div>
      </div>
    )
  }
}

export default Sidebar
