'use strict';

const { readFile } = require('fs');

const reader = (paths, callback) => {
  const result = [];

  readFile(paths[0], (error, data) => {
    if (error) {
      return callback(error);
    }
    result.push(data.toString('utf-8', 0, 5));
    readFile(paths[1], (error, data) => {
      if (error) {
        return callback(error);
      }
      result.push(data.toString('utf-8', 0, 5));
      readFile(paths[2], (error, data) => {
        if (error) {
          return callback(error);
        }
        result.push(data.toString('utf-8', 0, 5));
        callback(null, result);
      });
    });
  });
};

module.exports = reader;
