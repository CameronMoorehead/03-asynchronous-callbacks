'use strict';

const { readFile } = require('fs');

const recursiveReader = (paths, callback) => {
  const result = [];
  const recursePaths = (paths) => {
    if (paths.length === 0) {
      callback(null, result);
      return;
    }
    readFile(paths[0], (error, data) => {
      if (error) {
        callback(error);
        return;
      }
      result.push(data.toString('utf-8', 0, 5));
      recursePaths(paths.shift());
    });
  };
  recursePaths(paths);
};

module.exports = recursiveReader;
