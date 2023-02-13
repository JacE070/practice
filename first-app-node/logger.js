var url = "http://mylogger.io/log";

function log(msg) {
  // Send an HTTP request
  console.log(msg);
}

module.exports.log = log;
