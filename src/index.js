import index from './lib/index';
import css from './lib/css';
import dom from './lib/dom';
import http from './lib/http';
import notices from './lib/notices';

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
