import React from 'react'
import _ from 'lodash'
import { Chart, Setting } from '../'
import { Button, Grid } from 'semantic-ui-react'
import './Sidebar.css'
import SettingPopup from '../../components/SettingPopup/index'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      showItem: 'charts'
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

  showMenu = item => {
    this.setState({
      showingItem: item,
      visible: true
    })
  }

  hideMenu = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    let self = this
    const { visible, showingItem } = this.state
    const className = self.state.visible ? 'menuShow' : 'menuHide'
    const sidebarClass = visible ? 'sidebar active' : 'sidebar'
    // const child = self.props.children.filter(function(ele) {
    //   console.log('current state: ', self.state.showItem)
    //   return ele.props.name === self.state.showItem
    // })
    const menuShowing = true
    return (
      <div className={sidebarClass}>
        <div className="sidebar-control">
          <Button
            circular
            icon="settings"
            size="big"
            hidden={!menuShowing}
            onClick={() => this.showMenu('settings')}
          />

          <Button
            circular
            icon="bar chart"
            size="big"
            hidden={!menuShowing}
            onClick={() => this.showMenu('charts')}
          />
        </div>
        <div className="sidebar-content">
          {console.log(showingItem)}
          {showingItem === 'charts' && <Chart />}
          {showingItem === 'settings' && <Setting />}

          <div className="sidebar-footer">
            {menuShowing && (
              <Button
                circular
                icon="close"
                size="big"
                hidden={menuShowing}
                onClick={this.hideMenu}
              />
            )}
          </div>
        </div>
        {/* <div className={className}>{child}</div> */}
        {/* <Chart name="Chart" visibility="hidden" />
        <Setting name="Setting" visibility="hidden" /> */}
      </div>
    )
  }
}

export default Sidebar
