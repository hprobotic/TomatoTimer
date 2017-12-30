import React from 'react'
import { Button } from 'semantic-ui-react'
import './Sidebar.css'


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        visible: false,
        showItem: 'None',
    }
  }

  showChartMenu() {
    this.setState({
      visible: !this.state.visible,
      showItem: 'Chart',
    })
  }

  showSettingMenu() {
    this.setState({
      visible: !this.state.visible,
      showItem: 'Setting',
    })
  }

  render() {
    let self = this;
    const className = self.state.visible ? "menuShow" : "menuHide";
    const child = self.props.children.filter(function(ele) {
      return ele.props.name == self.state.showItem
    })
    return (
      <div>
        <div className = "button">
        <Button  circular floated="right" icon="settings" size="big" basic onClick={self.showSettingMenu.bind(self)}/>
        <Button  circular floated="right" icon="bar chart" size="big" basic onClick={self.showChartMenu.bind(self)} />
        </div>
        <div className={className}>
          {child}
        </div>
      </div>
    )
  }
}


export default Sidebar
