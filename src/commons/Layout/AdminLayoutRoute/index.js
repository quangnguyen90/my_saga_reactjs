import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../../components/Dashboard';
import styles from './styles';

class AdminLayoutRoute extends Component {
  render() {
    const { route } = this.props;
    const { component: YourComponent, name, ...remainProps } = route;
    return (
      <Route
        {...remainProps}
        render={(routerProps) => {
          return (
            <Dashboard>
              <YourComponent {...routerProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  route: PropTypes.object,
};

export default withStyles(styles)(AdminLayoutRoute);
