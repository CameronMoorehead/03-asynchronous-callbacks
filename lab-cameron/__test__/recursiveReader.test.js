'use strict';

const recursiveReader = require('../lib/recursiveReader');

const asset1 = `${__dirname}/../assets/first.txt`;
const asset2 = `${__dirname}/../assets/second.txt`;
const asset3 = `${__dirname}/../assets/third.txt`;

describe('recursiveReader.js', () => {
  test('return an array of strings from each asset', done => {
    const paths = [asset1, asset2, asset3];
    const expected = ['Lorem', 'Sugar', 'Zombi'];
    let result = [];

    const callback = (error, data) => {
      result = data;
      expect(error).toBeNull();
      expect(result).toEqual(expected);
      done();
    };

    recursiveReader(paths, callback);
  });

  test('throw an error if recursiveReader is given invalid file paths', done => {
    const paths = ['invalid path', asset2, asset3];
    recursiveReader(paths, error => {
      expect(error).not.toBeNull();
      done();
    });
  });

  test('throw an error if recursiveReader is given invalid file paths', done => {
    const paths = [asset1, 'invalid path', asset3];
    recursiveReader(paths, error => {
      expect(error).not.toBeNull();
      done();
    });
  });

  test('throw an error if recursiveReader is given invalid file paths', done => {
    const paths = [asset1, asset2, 'invalid path'];
    recursiveReader(paths, error => {
      expect(error).not.toBeNull();
      done();
    });
  });
});
