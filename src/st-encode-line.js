import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  let encodedLine = str.replace(/(.)\1+/g, function (x) {

    return x.length + x[0];

  });

  return encodedLine;

  
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
