var HungryShopifyContent = (function() {

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
        // this.elements = this.parent.querySelectorAll(this.selector);
    }

    Constructor.prototype.extract = function (el, prefix, suffix) {
        let s = el;
        let i = s.indexOf(prefix);
        if (i >= 0) {
          s = s.substring(i + prefix.length);
        } else {
          return '';
        }
        if (suffix) {
          i = s.indexOf(suffix);
          if (i >= 0) {
            s = s.substring(0, i);
          } else {
            return '';
          }
        }
        return s;
    };

    Constructor.prototype.format = function() {
        let content = this.parent.innerHTML;
        let result = content.match(/<.+?>(.*?)<\/.+?>/g);
        console.table(result);
    }

    return Constructor;
})();