import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routerProps) => {
          return <YourComponent {...routerProps} />;
        }}
      />
    );
  }
}

DefaultLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default withStyles(styles)(DefaultLayoutRoute);
