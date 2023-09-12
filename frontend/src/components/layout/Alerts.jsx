import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.name) {
        alert.error(`Name ${error.message.name.join()}`);
      }
      if (error.message.email) {
        alert.error(`Email ${error.message.email.join()}`);
      }
      if (error.message.message) {
        alert.error(`Message ${error.message.message.join()}`);
      }
      if (error.message.non_field_errors)
        alert.error(error.message.non_field_errors);
      if (error.message.username) alert.error(error.message.username);
    }
    if (message !== prevProps.message) {
      if (message.deleteTodo) alert.success(message.deleteTodo);
      if (message.addTodo) alert.success(message.addTodo);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
