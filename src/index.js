import index from './utils';
import css from './css';
import dom from './dom';
import http from './http';
import notices from './notices';

var utils = {
    hasLocalStorage: index.hasLocalStorage
  , each: index.each
  , forEach: index.each
  , css
  , dom
  , http
  , notices
};

export default utils;
