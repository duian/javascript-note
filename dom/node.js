# DOM node

## el
// query
document.body
document.links
document.images
document.getElementById(id)
document.getElementsByClassName(className)
document.getElementsByTagName(tag)
document.querySelector(selector)
document.querySelectorAll(selector)

// 父子兄弟姐妹
el.parentNode
el.parentElement

el.children

el.firstElementChild
el.lastElementChild

el.nextElementSibling;
el.previousElementSibling;

// add
document.createElement()
document.createTextNode()
document.createDocumentFragment()

// change
el.removeChild()
el.appendChild()
el.insertBefore()
el.replaceChild()


## attribute
el.createAttribute()
el.attributes
el.getAttribute('class');
el.setAttribute('class', 'a')
el.hasAttribute('class')
el.removeAttribute('class')
el.hasAttribute()

// TODO
nodeType

function hasClass(name) {
  if (!name) return false;
  var $this = this;
  return this.className.indexOf(name) !== -1;
  return this.classList.contains(name) !== -1;
}
