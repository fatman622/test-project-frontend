import jsdom from 'jsdom';  
import chai from 'chai';  
import chaiImmutable from 'chai-immutable';

module.exports = function(markup) {  
  if (typeof document !== 'undefined') return;
  var jsdom = require('jsdom').jsdom;
  global.doc = jsdom(markup || '');
  global.win = document.defaultView;
  global.nav = {
    userAgent: 'node.js'
  };
};

chai.use(chaiImmutable);  