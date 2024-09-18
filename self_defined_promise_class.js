const { setTimeout } = require("timers/promises");

class promise2 {
  constructor(fn) {
    function afterDone() {
      this.resolve;
    }
  }
  then(callback) {
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new promise2(readTheFile);
}

const p = setTimeoutPromisified();

function callback() {
  console.log("callback has been called");
}

p.then(callback);
