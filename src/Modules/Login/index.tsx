import React from 'react';
import { Redirect } from 'react-router-dom';

import Component from './LoginStyledComponents';
import { LoginProps } from './LoginScene';

interface IState {
  user: string,
  password: string,
  redirect: string,
}

class Login extends React.Component<LoginProps, IState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      user: '',
      password: '',
      redirect: '',
    };

    this.handlerLogin = this.handlerLogin.bind(this);
  }

  handlerData(value: string, key: string) {
    var obj: any = {};
    obj[key] = value;
    this.setState(obj);
    return;
  }

  handlerLogin() {
    const { user, password } = this.state;
    this.props.initLogin(user, password);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      if (redirect === '/home' && this.props.login.token) {
        return <Redirect to={redirect} push />;
      } else if (redirect !== '/home') {
        return <Redirect to={redirect} push />
      }
    }

    return (
      <Component.Container>
        <Component.Title>Login</Component.Title>

        <Component.ContainerData>
          <Component.Label>USER</Component.Label>
          <Component.Input
            onChange={e => this.handlerData(e.target.value, 'user')} />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Label>PASSWORD</Component.Label>
          <Component.Input type='password'
            onChange={e => this.handlerData(e.target.value, 'password')} />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Button onClick={() => this.handlerData('/createUser', 'redirect')}>
            REGISTER
          </Component.Button>
          <Component.Button login onClick={() => this.handlerData('/home', 'redirect')}>
            LOGIN
          </Component.Button>
        </Component.ContainerData>
      </Component.Container>
    )
  }
}

export default Login;