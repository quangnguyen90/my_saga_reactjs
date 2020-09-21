import React, { Component } from 'react';
import { withStyles, Button, Box } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';

const listTask = [
    {
        id: 1,
        title: "Learn Frontend",
        description: "Learn ReactJS",
        status: 0
    },
    {
        id: 2,
        title: "Learn Backend",
        description: "Learn NodeJS",
        status: 2
    },
    {
        id: 3,
        title: "Learn Fullstack",
        description: "",
        status: 1
    },
];

class TaskBoard extends Component {
    renderBoard() {
        var {classes} = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <Grid item md={4} xs={12} key={status.value}>
                                <Box mt={2} mb={2}>
                                    <div className={classes.status}>{status.label}</div>
                                </Box>
                                <div className={classes.wrapperListTask}>
                                    {
                                        taskFiltered.map((task) => {
                                            const { title } = task;
                                            return (
                                                <Card key={task.id} className={classes.card}>
                                                    <CardContent>
                                                        <Grid container justify="space-between">
                                                            <Grid item md={8}>
                                                                <Typography component="h2">
                                                                    {title}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item md={4}>
                                                                {status.label}
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small"></Button>
                                                    </CardActions>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
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