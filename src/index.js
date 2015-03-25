import {each, hasLocalStorage} from './utils';
import css from './css';
import dom from './dom';
import http from './http';
import notices from './notices';

var utils = {
    hasLocalStorage
  , each
  , forEach: index.each
  , css
  , dom
  , http
  , notices
};

export default utils;
