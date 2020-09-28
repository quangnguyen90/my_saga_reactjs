import { Box, Grid, Modal, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal open={open} onClose={this.onClose}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>Add New Task</span>
            <CloseIcon className={classes.icon} onClick={onClose} />
          </div>
          <div className={classes.content}>
            <form>
              <Grid container>
                <Grid item md={12}>
                  <TextField
                    id="standard-name"
                    label="Title"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    className={classes.textField}
                    rowsMax={4}
                    margin="normal"
                  />
                </Grid>
                <Grid item md={12}>
                  <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                      <Button variant="contained" onClick={onClose}>
                        Cancel
                      </Button>
                    </Box>
                    <Box>
                      <Button variant="contained" color="primary">
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
