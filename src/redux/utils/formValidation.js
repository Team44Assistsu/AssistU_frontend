import { store } from "react-notifications-component";
import _ from "lodash";
import moment from "moment";
import jwt_decode from "jwt-decode";
let allEventsgraph = [];
export const validation = (message) => {
  store.addNotification({
    title: "",
    message: message,
    type: "danger",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
    },
  });
};
/**Email Validation */
export const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const ValidatePassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (regex.test(password)) {
    return true;
  }
  return false;
};
export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\d{10}$/;
  if (regex.test(phoneNumber)) {
    return true;
  }
  return false;
};
export const validateAlphaNumeric = (number) => {
  const regex = /^[a-zA-Z0-9]{4,10}$/;
  if (regex.test(number)) {
    return true;
  }
  return false;
};
export const validateIPAddress = (ipAddress) => {
  // const regex = /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/
  const regex = /^(25[1-5]|2[0-4][1-9]|[01]?[1-9][1-9]?)\.(25[1-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[1-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[1-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (regex.test(ipAddress)) {
    return true;
  }
  return false;
};
export const validateCameraNumber = (totalCameras) => {
  // const regex = /^(1[0-6]|[1]?[1-6])$/;
  const regex = /^([1-9]|1[0-7])$/;
  if (regex.test(totalCameras)) {
    return true;
  }
  return false;
};
export const nameValidation = (name) => {
  const regex = /^([a-zA-Z_ ]){2,30}$/;
  if (regex.test(name)) {
    return true;
  }
  return false;
};
export const msToTime = (duration) => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
export const validateInputWithList = (list, input) => {
  if (list && list.indexOf(input) >= 0) {
    return false;
  }
  return true;
};
export const validateHttpPort = (input) => {
  if (input >= 20 && input <= 10000) {
    return true;
  }
  return false;
};
export const findDigitAmount = (num) => {
  var positiveNumber = Math.sign(num) * num;
  var lengthNumber = positiveNumber.toString();

  return lengthNumber.length;
};
export const GraphCommonCode = (graph, format) => {
  const allEvents = Object.entries(graph);
  if (graph.period === "week") {
    allEventsgraph = allEvents.map((x) => ({
      y: x[1],
      x: x[0],
    }));
    allEventsgraph = _.sortBy(allEventsgraph, "x");
  } else if (graph.period === "day") {
    allEventsgraph = allEvents.map((x) => {
      let data = moment.utc(
        moment(x[0], "DD").utc().format("DD")
      );
      const t = {
        y: x[1],
        x: moment(data).format("DD"),
      };
      return t;
    });
    const filterData = allEventsgraph.filter((x) => x.x !== "Invalid date");
    allEventsgraph = filterData;
    allEventsgraph.sort((a, b) => (a.x > b.x ? 1 : b.x > a.x ? -1 : 0));
  } else {
    allEventsgraph = allEvents.map((x) => {
      let data = moment.utc(moment(x[0]).utc().format("YYYY-MM-DD HH:mm:ssZ"));
      const t = {
        y: x[1],
        x: moment(data).format("MMM YYYY"),
      };
      return t;
    });
    const filterData = allEventsgraph.filter((x) => x.x !== "Invalid date");
    allEventsgraph = filterData;
    allEventsgraph.sort(function (a, b) {
      return new Date(a.x).getTime() - new Date(b.x).getTime();
    });
  }
  return allEventsgraph;
};

function isTokenAvailable() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
function isAccessTokenExpired() {
  const token = localStorage.getItem("token")
  if (token) {
    const decoded = jwt_decode(token);
    const accessTokenExpires = decoded.exp
    const epochSeconds = Math.floor(new Date().getTime() / 1000.0);
    return epochSeconds > accessTokenExpires;
  }
  return false
}
export const isAuthenticated = () => {
  if (isTokenAvailable() && !isAccessTokenExpired()) {
    return true
  }
  return false
}

export const isTokenExpired = () => {

}