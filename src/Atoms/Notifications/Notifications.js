import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Notifications extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.notify !== this.props.notify &&
      Object.entries(this.props.notify)?.length > 0
    ) {
      this.createNotification(
        this.props.notify?.type,
        this.props.notify?.message
      );
    }
  }
  createNotification = (type, message) => {
    switch (type) {
      case "info":
        NotificationManager.info(message, "", 5000);
        break;
      case "success":
        NotificationManager.success(message, "", 5000);
        break;
      case "warning":
        NotificationManager.warning(message, "", 5000);
        break;
      case "error":
        NotificationManager.error(message, "", 5000);
        break;
      default:
        break;
    }
  };
  render() {
    return <NotificationContainer />;
  }
}

export default Notifications;
