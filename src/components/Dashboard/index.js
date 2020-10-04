import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    const { classes, children, name } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} />
        <div className={classes.wrapper}>
          <Sidebar />
          <div className={classes.wrapperContent}>{children}</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
  name: PropTypes.string,
};

export default withStyles(styles)(Dashboard);
