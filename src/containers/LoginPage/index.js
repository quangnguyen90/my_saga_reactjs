import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Please Login to continue
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textFiled}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textFiled}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
                <div className="pt=1 text-md-center">
                  <Link to="/signup">
                    <Button>Register New Account</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
