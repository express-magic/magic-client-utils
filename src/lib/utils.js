import dom from './lib/dom';
import css from './lib/css';
import http from './lib/http';
import notices from './lib/notices';

var utils = {};

export function each (arrOrObj, func) {
  if ( typeof arrOrObj === 'array' ) {
    for ( let i = 0; i < arrOrObj.length; i++ ) {
      func(arrOrObj[i], i);
    }
  } else if ( typeof arrOrObj === 'object' ) {
    for ( let key in arrOrObj ) {
      if ( arrOrObj.hasOwnProperty(key) ) {
        func(arrOrObj[key], key);
      }
    }
  } else {
    error(`utils: each called without array or object: ${arrOrObj}`);
  }
}

export function hasLocalStorage() {
  try {
      localStorage.setItem('itemtest235', 'mod');
      if ( ! localStorage.getItem('itemtest235') === 'mod') {
        throw Error('getItem failed');
      }
      localStorage.removeItem('itemtest235');
      return true;
  } catch(e) {
      return false;
  }
}

utils = {
    hasLocalStorage
  , each
  , dom
  , css
  , http
  , notices
};

export default utils;
