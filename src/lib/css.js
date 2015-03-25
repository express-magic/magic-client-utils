var css = {
  class: {
      toggle(ele, name) {
        if ( hasClass(ele, name) ) {
          rmClass(ele, name);
          return false;
        } else {
          addClass(ele, name);
          return true;
        }
      }

    , has(ele, name) {
        return ele.className.indexOf(name) > -1;
      }

    , add(ele, name) {
        ele.classList.add(name);
      }

    , remove(ele, name) {
        ele.classList.remove(name);
      }
  }
};

export default css;
