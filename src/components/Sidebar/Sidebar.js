import React from 'react'
// import { Button, Icon } from 'semantic-ui-react'
// import Setting from '../../containers/Setting'

// const Sidebar = () => (
//   <div>
//     <Setting />
//     {/* <Button circular floated="right" icon="settings" size="big" basic /> */}
//     <Button circular floated="right" icon="bar chart" size="big" basic />
//   </div>
// )
import { Button } from 'semantic-ui-react'
import './Sidebar.css'

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
      this.state.showItem == 'Setting' && this.state.visible
        ? true
        : !this.state.visible
    this.setState({
      visible: visible,
      showItem: 'Chart'
    })
  }

  showSettingMenu() {
    const visible =
      this.state.showItem == 'Chart' && this.state.visible
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
      return ele.props.name == self.state.showItem
    })
    return (
      <div>
        <div className="button">
          <Button
            circular
            floated="right"
            icon="settings"
            size="big"
            basic
            onClick={self.showSettingMenu.bind(self)}
          />
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
