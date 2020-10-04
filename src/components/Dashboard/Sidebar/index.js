import { Drawer, List, ListItem, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ADMIN_ROUTES } from '../../../constants';
import styles from './styles';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  toggleDrawer = (value) => {
    this.setState({
      open: value,
    });
  };

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <ListItem key={item.path} className={classes.menuItem} button>
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Drawer
        open={open}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Sidebar);
