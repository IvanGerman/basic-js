import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {

  const arrayOfDigits = Array.from(String(n), Number);

  arrayOfDigits.splice(arrayOfDigits.lastIndexOf(Math.min(...arrayOfDigits)), 1);

  let result = parseInt(arrayOfDigits.join(''));
  
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
