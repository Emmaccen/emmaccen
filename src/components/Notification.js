import React from "react";
import $ from "jquery";

function handleNotification(message) {
  $(".notificationMessage").text(message);
  $(".notificationContainer").css("bottom", "50px");
  setTimeout(() => {
    $(".notificationContainer").css("bottom", "-50px");
    // $('.notificationMessage').text('')
  }, 3000);
}

class Notification extends React.Component {
  render() {
    return (
      <div>
        <div className="notificationContainer">
          <p className="notificationMessage"></p>
        </div>
      </div>
    );
  }
}

export { Notification };
export { handleNotification };
