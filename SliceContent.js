window.ExtractText = (function () {
  "use strict";

  var defaults = {
    selector: "",
    parent: "",
    output: ""
  };

  var settings;

  /*
   * Setup Function Constructor
   * @param {String} selector
   * @param {String} parent element (optional)
   */
  var Constructor = function (options) {
    // Initialise Settings from user input
    settings = Object.assign({}, defaults, options);

    this.sections = {};

    // Handle selector
    if (!settings.selector) throw new Error("🤔 Selector not found");

    if (!settings.parent) {
      // Find parent from script location
      this.parent = document.currentScript.parentElement;
    } else {
      if (!settings.parent)
        throw new Error('🤔 Element "' + parent + '" not found in DOM');
      this.parent = document.querySelector(settings.parent);
    }

    // Initialiser for extract function
    this.content = [];

    this.elements = this.parent.querySelectorAll(settings.selector);

    // Initialise straight away
    this.extract();
    this.format();

    // Return the sections
    return this.sections;
  };

  /*
   * Get all following siblings of each element up to but not including the element matched by the selector
   * https://vanillajstoolkit.com/helpers/nextuntil/
   */
  var nextUntil = function (elem, selector, filter) {
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
  };

  /*
   * Parse HTML and store in Array
   */
  Constructor.prototype.extract = function () {
    for (let i = 0; i < this.elements.length; i++) {
      let innerContent = nextUntil(this.elements[i], this.selector);
      // Prepend header to content
      innerContent.unshift(this.elements[i]);
      this.content.push(innerContent);
    }
  };

  /*
   * Iterate though content and insert into DOM as seperate blocks
   */
  Constructor.prototype.format = function () {
    for (let i = 0; i < this.content.length; i++) {
      let element = document.createElement("div");
      // Set element class to the same as parent
      //! This could be improved - optional use of class
      element.setAttribute("class", this.parent.className);
      if (!settings.output) {
        for (let n = 0; n < this.content[i].length; n++) {
          element.appendChild(this.content[i][n]);
        }
        this.parent.parentElement.appendChild(element);
      } else {
        let output = document.querySelector(settings.output);
        for (let n = 0; n < this.content[i].length; n++) {
          element.appendChild(this.content[i][n]);
        }
        output.appendChild(element);
      }
      this.sections[i] = element.innerHTML;
    }
    // Remove original DOM element
    this.parent.remove();
  };

  return Constructor;
})();