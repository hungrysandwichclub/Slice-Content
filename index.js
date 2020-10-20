window.ExtractText = (function() {

  "use strict";


  /*
  * Setup Function Constructor
  * @param {String} selector
  */
  var Constructor = function (selector) {
      if (!selector) {
          throw new Error('🤔 Selector not found');
      }
      this.selector = selector;
      this.parent = document.currentScript.parentElement;
      this.elements = this.parent.querySelectorAll(this.selector);
  }

  /*
  * Get all following siblings of each element up to but not including the element matched by the selector
  * https://vanillajstoolkit.com/helpers/nextuntil/
  */
  var nextUntil = function (elem, selector, filter) {
    // matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    // Setup siblings array
    var siblings = [];
    // Get the next sibling element
    elem = elem.nextElementSibling;
    // As long as a sibling exists
    while (elem) {
      // If we've reached our match, bail
      if (elem.matches(selector)) break;
      // If filtering by a selector, check if the sibling matches
      if (filter && !elem.matches(filter)) {
        elem = elem.nextElementSibling;
        continue;
      }
      // Otherwise, push it to the siblings array
      siblings.push(elem);
      // Get the next sibling element
      elem = elem.nextElementSibling;
    }
    return siblings;
  }

  /*
  * Iterate though all elements and split into styled components
  */
  Constructor.prototype.format = function() {
    // Loop though and create items - offset of 1 leaves first block in original element
    for (let i = 1; i < this.elements.length; i++) {
      // Get all content below selector
      let content = nextUntil(this.elements[i], this.selector);
      // Prepend header to content
      content.unshift(this.elements[i]);
      // Create new element with class that matches existing block
      let element = document.createElement("div");
      element.setAttribute('class', this.parent.className);
      // Populate element with content
      for (let i = 0; i < content.length; i++) {
        element.appendChild(content[i]);
      }
      this.parent.parentElement.appendChild(element);
    }

  }

  return Constructor;
})();