const request = require('request');

const requestPromise = (requestObject) => {
  return new Promise((resolve, reject) => {
    request(requestObject,(err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

};

module.exports = {
  requestPromise,
};