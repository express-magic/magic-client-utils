import is from 'is';

var utils = {
  each(arrOrObj, func) {
    if ( typeof arrOrObj === 'array' ) {
      for ( let i = 0; i < arrOrObj.length; i++ ) {
        if ( is.func(func) ) {
          func(arrOrObj[i], i);
        }
      }
    } else if ( typeof arrOrObj === 'object' ) {
      for ( let key in arrOrObj ) {
        if ( arrOrObj.hasOwnProperty(key) && is.fn(func) ) {
          func(arrOrObj[key], key);
        }
      }
    } else {
      error(`utils: each called without array or object: ${arrOrObj}`);
    }
  }

, hasLocalStorage() {
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
};

export default utils;
