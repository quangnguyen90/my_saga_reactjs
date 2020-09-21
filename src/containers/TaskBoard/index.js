import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../contants';

class TaskBoard extends Component {
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        return (
                            <Grid item md={4} xs={3} key={status.value}>
                                {status.label}
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    render() {
        var {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon /> Add New Task
                </Button>
                {this.renderBoard()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);