import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {

  const k = 0.693 / HALF_LIFE_PERIOD;
  const activValue = parseFloat(sampleActivity);

  if ( isNaN(activValue) ) { 
    return false;
  };

  if ( typeof(sampleActivity) !== 'string' ) { 
    return false;
  };

  if ( !(activValue > 0 && activValue < MODERN_ACTIVITY) ) { 
    return false;
  };

  return Math.ceil( Math.log( MODERN_ACTIVITY / activValue ) / k );

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
};
