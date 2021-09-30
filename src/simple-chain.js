import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  myChain: [],

  getLength() {

    return this.myChain.length;

  },
  
  addLink(value) {

    this.myChain.push('( ' + String(value) + ' )');
    return this;

  },

  removeLink(position) {

    if ( typeof (position) === 'number' && Number.isInteger(position) === true ) {

      if (0 < position && position <= this.myChain.length) {

        this.myChain.splice(position - 1, 1);
        return this;

      };
    };
      
    this.myChain = [];
    throw Error("You can't remove incorrect link!");

  },

  reverseChain() {

    this.myChain.reverse();
    return this;

  },

  finishChain() {

    let finishedChain = this.myChain.join('~~');
    this.myChain = [];
    return finishedChain;

  }
};
