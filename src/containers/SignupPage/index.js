import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Register New Account
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.textFiled}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="I have read & agree with rules"
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Signup
                </Button>
                <div className="pt=1 text-md-center">
                  <Link to="/login">
                    <Button>Already has account</Button>
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

SignupPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupPage);
