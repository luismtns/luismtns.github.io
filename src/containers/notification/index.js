import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { all } from '@data/notification/NotificationSelectors';
import { remove } from '@data/notification/NotificationActions';

import './index.scss';

class NotificationContainerLocal extends React.Component {

  constructor(props) {
    super(props);

    this.createNotification = this.createNotification.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.entries.length < this.props.entries.length) {
      this.createNotification(this.props.entries[this.props.entries.length -1]);
    }
  }

  createNotification(entry) {
    const { level, message } = entry;

    switch (level) {
      case 'success':
        toast.success(<div dangerouslySetInnerHTML={{__html: message}} />, { onClose: () => this.props.removeNotification(entry) });
      break;
      case 'info':
        toast.info(<div dangerouslySetInnerHTML={{__html: message}} />, { autoClose:false, onClose: () => this.props.removeNotification(entry) });
      break;
      case 'error':
        toast.error(<div dangerouslySetInnerHTML={{__html: message}} />, { autoClose: 5000, onClose: () => this.props.removeNotification(entry) });
      break;
    }
  };

  render() {
    return (
      <ToastContainer />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  entries: all(state),
});

const mapDispatchToProps = dispatch => ({
  removeNotification: notification => dispatch(remove(notification.uid)),
});

NotificationContainerLocal.propTypes = {};

NotificationContainerLocal.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainerLocal);

