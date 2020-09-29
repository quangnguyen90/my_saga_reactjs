import { Box, Grid, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modelActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log('data', data);
  };

  required = (value) => {
    let error = 'Please enter the title';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  };

  minLength5 = (value) => {
    let error = null;
    if (value.length < 5) {
      error = 'Title must have at least 5 characters';
    }
    return error;
  };

  render() {
    const { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Title"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Description"
              multiline
              className={classes.textField}
              rowsMax={4}
              margin="normal"
              name="description"
              component={renderTextField}
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
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
