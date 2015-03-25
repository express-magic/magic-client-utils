import dom from './dom';
import is from 'is';

export function showSuccess(text) {
  showNotice('success', text);
}
export function showError(text) {
  showNotice('error', text);
}

export function showNotice(cssId, text) {
  var ele = getNoticeEle(cssId, text);

  if ( typeof text === 'string' && text ) {
    let currentCount = 0;
    var interval = setInterval( () => {
      if ( currentCount === 0 ) { //0 milliseconds
        dom.class.add(ele, 'visible');
      }
      if ( currentCount === 6 ) { //3 seconds
        dom.class.rm(ele, 'visible');
      }
      if ( currentCount >= 8 ) { //4 seconds
        clearInterval(interval);
        dom.rm(ele);
      }
      currentCount++;
    }, 100)
  }
}

export function getNoticeParentEle(selector) {
  var selector = is.string(selector) ? selector.replace('#', '') : false
    , sel = selector || 'notice-parent'
    , ele = document.querySelector('#' + sel)
  ;
  if ( ! ele || ! is.fn(ele.setAttribute) ) {
    ele = dom.create('div');
    ele.setAttribute('id', selector);
    dom.prepend(document.body, ele);
  }
  return ele;
}

export function getNoticeEle(cssId, val) {
  var par = getNoticeParentEle()
    , ele = document.querySelector('#' + cssId)
  ;
  if ( ! ele || ! isFunc(ele.getAttribute) ) {
    ele = document.createElement('div');
    dom.id(ele, cssId);
    dom.class(ele, 'notice');
    dom.append(par, ele);
  }
  if ( typeof val === 'string' ) {
    ele.innerText = val;
  }
  return ele;
}
