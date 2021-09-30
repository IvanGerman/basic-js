import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if ( Array.isArray(arr) !== true) {

    throw Error("'arr' parameter must be an instance of the Array!");

  };

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {

    if ( arr[i] === '--discard-prev' ) {

      if ( transformedArray.length > 0 ) {
        transformedArray.pop();
      };
      continue;
    };

    if ( arr[i] === '--discard-next' ) {

      if ( arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev' ) {
        i = i + 1;
      };
      
      i = i + 1; 
      continue;
    };

    if ( arr[i] === '--double-next' ) {

      if ( i + 1 < arr.length ) {
        transformedArray.push(arr[i + 1]);
      };
      continue;
    };

    if ( arr[i] === '--double-prev' ) {

      if (transformedArray.length > 0) {
        transformedArray.push(arr[i - 1]);
      };
      continue;
    };

    transformedArray.push(arr[i]);

  };
  return transformedArray;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
};
