import { Modal, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modelActions from '../../actions/modal';
import styles from './styles';

class TaskModal extends Component {
  render() {
    const { classes, open, component, modalActionCreators, title } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

TaskModal.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  component: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modelActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskModal);
