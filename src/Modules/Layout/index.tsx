import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../../Routes';

import { LayoutProps } from './LayoutSecene';

class Layout extends React.Component<LayoutProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          {routes()}
        </Router>
      </div>
    )
  }
}

export default Layout;