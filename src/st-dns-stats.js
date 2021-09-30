import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {

  let resultObj = {};

  for (let n of domains) {

    let elemToArray = n.split('.').reverse(); 

    for (let i = 0; i < elemToArray.length; i++) {  
                                            
      let kindOfDomain = '.' + elemToArray.slice(0, i + 1).join('.'); 

      if ( resultObj[kindOfDomain] ) {

        resultObj[kindOfDomain]++;
       
      } else {

        resultObj[kindOfDomain] = 1;

      };
    };
  };

  return resultObj;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
