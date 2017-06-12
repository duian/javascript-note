function addClass(el, className) {
  if (el.className === '') {
    el.className = className;
    return el;
  }

  if (hasClass(el, className)) {
    return el;
  }

  el.className = `${el.className} ${className}`;
  return el;
}

function removeClass(el, className) {
  if (el.className === '' || el.className.indexOf(className) === -1) {
    return el;
  }

  const _className = el.className.split(' ').filter((name) => name !== className);
  el.className = _className.join(' ');
  return el;
}

function hasClass(el, className) {
  return el.className.indexOf(className) === -1 ? false : true;
}