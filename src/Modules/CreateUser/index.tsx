import React from 'react';
import { Redirect } from 'react-router-dom';
import Component from './CreateUserStyledComponents';
import { CreateUserProps } from './CreateUserScene';

interface IState {
  name: string,
  lastName: string,
  email: string,
  user: string,
  password: string,
  verifyPassword: string;
  redirectCreate: string;
  redirectCancel: string;
}

class CreateUser extends React.Component<CreateUserProps, IState> {
  constructor(props: CreateUserProps) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      email: '',
      user: '',
      password: '',
      verifyPassword: '',
      redirectCreate: '',
      redirectCancel: '',
    };

    this.handlerInitCreate = this.handlerInitCreate.bind(this);
  }

  handlerData(value: string, key: string) {
    var obj: any = {};
    obj[key] = value;
    this.setState(obj);
  }

  async handlerInitCreate() {
    const {
      name,
      lastName,
      email,
      user,
      password,
    } = this.state;
    this.props.create_user({
      type: 'user',
      name,
      lastName,
      email,
      user,
      password
    })

    if (!this.props.app.spinnerData.show) {
      console.log('59  >>>>>>');
      this.handlerData('/login', 'redirectCreate')
    }
  }


  verifyError() {
    const {
      name,
      lastName,
      email,
      user,
      password,
      verifyPassword,
    } = this.state;
    let response = '';
    if (!name || !lastName || !email || !user || !password || !verifyPassword) {
      return response = 'complete all field';
    }
    if (password !== verifyPassword) {
      return response = 'the passwords must coincide';
    }
    return response;
  }

  render() {
    const { redirectCancel, redirectCreate } = this.state;
    let errorVerify = '';
    if (redirectCreate) {
      errorVerify = this.verifyError();
      if (!errorVerify) {
        return <Redirect to={redirectCreate} push />;
      } else {
        this.setState({
          redirectCreate: '',
        }, () => {
          this.props.set_spinner_data({
            show: true,
            message: errorVerify,
            type: 'error',
          })
        })
      }
    }
    if (redirectCancel) {
      return (
        <Redirect to={redirectCancel} push />
      );
    }
    console.log('78  >>>>>>',);
    return (
      < Component.Container >
        <Component.Title>Create User</Component.Title>

        <Component.ContainerData>
          <Component.Label>TYPE</Component.Label>
          <Component.Input
            value={'User'}
            disabled />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Label>NAME</Component.Label>
          <Component.Input
            onChange={e => this.handlerData(e.target.value, 'name')} />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Label>LAST NAME</Component.Label>
          <Component.Input
            onChange={e => this.handlerData(e.target.value, 'lastName')} />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Label>E-MAIL</Component.Label>
          <Component.Input
            onChange={e => this.handlerData(e.target.value, 'email')} />
        </Component.ContainerData>

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
          <Component.Label>VERIFY PASSWORD</Component.Label>
          <Component.Input type='password'
            onChange={e => this.handlerData(e.target.value, 'verifyPassword')} />
        </Component.ContainerData>

        <Component.ContainerData>
          <Component.Button onClick={() => this.handlerData('/login', 'redirectCancel')}>
            CANCEL
          </Component.Button>
          <Component.Button create onClick={this.handlerInitCreate}>
            CREATE
          </Component.Button>
        </Component.ContainerData>
      </Component.Container >
    )
  }
}

export default CreateUser;