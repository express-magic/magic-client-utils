import {each} from './utils';
import is from 'is';

export function prepend (parent, ele) {
  var eleIsValid = ele && is.fn(ele.setAttribute)
    , parentIsValid = parent && is.fn(parent.insertBefore)
  ;
  if ( eleIsValid && parentIsValid ) {
    return parent.insertBefore(ele, parent.firstChild);
  }
}

export function append (parent, ele) {
  var eleIsValid = ele && is.fn(ele.setAttribute)
    , parentIsValid = parent && is.fn(parent.appendChild)
  ;
  if ( eleIsValid && parentIsValid ) {
    return parent.appendChild(ele);
  }
  return false;
}

export function remove(ele) {
  if (ele && ele.parentNode && is.fn(ele.parentNode.removeChild) ) {
    ele.parentNode.removeChild(ele);
  }
}

export function create(ele) {
  var d = document
    , docIsValid = d && is.fn(d.createElement)
  ;
  if ( docIsValid ) {
    return document.createElement(ele);
  }
}

export function id(ele, val) {
  if ( ! ele || ! is.fn(ele.setAttribute) ) {
    throw new Error('dom.id called without arguments, dom.id(ele, text)');
  }
  if ( ! val ) {
    return ele.getAttribute('id');
  }
  if ( isStr(val) ) {
    ele.setAttribute('id', val);
    return ele.getAttribute('id');
  }
}

export function compareType(ele, type=false) {
  if (type ) {
    if ( isStr(type) ) {
      return ele.parentNode.tagName.toLowerCase() === type.toLowerCase();
    } else if ( isArr(type) || isObj(type) ) {
      each(type, (t) => {
        if ( compareType(ele, t) ) {
          return true;
        }
      });
    }
    return false;
  } 
}

export function findParent(ele, type=false) {
  console.log(`find parent for ele ${ele} and type ${type}`);
  if ( ! ele || ! ele.parentNode || ! type  ) {
    return false;
  }
  if ( compareType(ele.parentNode, type) ) {
    return ele.parentNode;rr
  }
  findParent(ele.parentNode, type);
}


export var rm = remove;
export var add = append;

export var dom = {
    prepend
  , append
  , add
  , remove
  , rm
  , create
  , id
  , findParent
  , parent: findParent
};
export default dom;
