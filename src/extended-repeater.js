import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {

  if ( options.separator === undefined ) {

    options.separator = '+';

  };

  if ( options.additionSeparator === undefined ) {

    options.additionSeparator = '|';

  };

  if ( options.addition === null ) {

    options.addition = 'null';

  }; 
  
  if  ( options.addition === false ) {
    
    options.addition = 'false';

  };

  let addedString = new Array(options.additionRepeatTimes);

  addedString = addedString.fill(options.addition).join(options.additionSeparator);
  
  
  let repeatedString = new Array(options.repeatTimes);

  repeatedString = repeatedString.fill(str + addedString).join(options.separator);

  return repeatedString;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
