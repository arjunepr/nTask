'use strict';

module.exports = (function(){
  global.LOG = process.env.NODE_ENV === 'DEVELOPMENT' ? console.log : () => null;
})();