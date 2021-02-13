import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../../Routes';

import Components from './layoutStyledComponents';
import { LayoutProps } from './LayoutSecene';

import SnackbarComponent from '../../utils/materialUi/Snackbar';

class Layout extends React.Component<LayoutProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log('17 this.props.app.spinnerData >>>>>>', this.props.app.spinnerData);
    const { show, message, type } = this.props.app.spinnerData;
    return (
      <Components.Container>

        <SnackbarComponent
          snackbarData={{ show, message, type }}
          handleClose={this.props.set_spinner_data} />

        <Router>
          {routes()}
        </Router>
      </Components.Container>
    )
  }
}

export default Layout;