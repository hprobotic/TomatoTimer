import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Setting from '../../containers/Setting';

const Sidebar = () => (
  <div>
    <Setting />
    {/* <Button circular floated="right" icon="settings" size="big" basic /> */}
    <Button circular floated="right" icon="bar chart" size="big" basic />
  </div>
)

export default Sidebar
