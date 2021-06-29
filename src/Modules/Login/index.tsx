import React from 'react';
import { LoginProps } from './LoginScene';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

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
      <Grid container alignContent='center' justify='center' component="main">
        <div >

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

            >
              Sign In
            </Button>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default Login;