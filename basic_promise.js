const fs = require("fs");

console.log("----top of the file-----");

function readTheFile(resolve) {
  console.log("readTheFile called");

  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  });
}

function setTimeoutPromisified(fileName) {
  console.log("SetTimeoutPromisied called");
  //read the file and return the value
  return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback() {
  console.log("timer is done");
}

p.then(callback);

console.log("----end of the file-----");
