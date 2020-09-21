import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './style';
import { withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    //console.log("props", this.props);
    const { classes } = this.props;
    return (
      <div className="App">
        <h1>Hello Redux Saga</h1>
        <Button variant="contained" color="primary">
          Test Material UI
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>Frontend</div>
          <div className={classes.shape}>Backend</div>
          <div className={classes.shape}>Fullstack</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
