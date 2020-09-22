import { Button, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';

const listTask = [
    {
        id: 1,
        title: "Learn Frontend",
        description: "Learn ReactJS",
        status: 0,
    },
    {
        id: 2,
        title: "Learn Backend",
        description: "Learn NodeJS",
        status: 2,
    },
    {
        id: 3,
        title: "Learn Fullstack",
        description: "",
        status: 1,
    },
];

class TaskBoard extends Component {
    state = {
        open: false
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    openForm = () => {
        this.setState({
            open: true
        })
    }

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList tasks={taskFiltered} status={status} key={status.value} />
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    renderForm() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose} />
        )
        return xhtml;
    }

    render() {
        var { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon /> Add New Task
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(TaskBoard);
