import React from 'react';
import { LoginProps } from './LoginScene';

interface IState {
}

class Login extends React.Component<LoginProps, IState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div>
        holi
      </div>
    )
  }
}

export default Login;