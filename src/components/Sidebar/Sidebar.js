import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Chart, Setting } from '../'
import { Button, Grid } from 'semantic-ui-react'
import './Sidebar.css'
import SettingPopup from '../../components/SettingPopup/index'
import { toggleSidebar } from '../../actions'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  showMenu = item => {
    this.props.toggleSidebar(item)
  }

  hideMenu = () => {
    this.props.toggleSidebar()
  }

  render() {
    let self = this
    const { showingItem, isShowing } = this.props
    const sidebarClass = isShowing ? 'sidebar active' : 'sidebar'
    const menuShowing = true
    return (
      <div className={sidebarClass}>
        <div className="sidebar-control">
          <Button
            circular
            icon="settings"
            size="big"
            inverted
            onClick={() => this.showMenu('settings')}
          />

          <Button
            circular
            icon="bar chart"
            size="big"
            inverted
            onClick={() => this.showMenu('charts')}
          />
        </div>
        {console.log('showing: ', showingItem)}
        <div className="sidebar-content">
          {showingItem === 'charts' && <Chart />}
          {showingItem === 'settings' && <Setting />}

          <div className="sidebar-footer">
            <Button
              circular
              icon="close"
              size="big"
              hidden={menuShowing}
              onClick={this.hideMenu}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showingItem: state.layout.sidebar.showingItem,
  isShowing: state.layout.sidebar.isShowing
})

const mapDispatchToProps = dispatch => ({
  toggleSidebar: item => dispatch(toggleSidebar(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
