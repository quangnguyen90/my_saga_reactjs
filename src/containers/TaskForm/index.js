import { Box, Grid, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modelActions from '../../actions/modal';
import styles from './styles';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log('data', data);
  };

  render() {
    const { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field name="title" component="input" />
          </Grid>
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
                <Button variant="contained" onClick={hideModal}>
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modelActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
