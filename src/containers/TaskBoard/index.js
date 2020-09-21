import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class TaskBoard extends Component {
    render() {
        var {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <div className={classes.shape}>Frontend</div>
                <div className={classes.shape}>Backend</div>
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);