![Slice Content Thumbnail Gif](readme/thumb-loop-with-type.gif)

# Slice Content splits WYSIWYG content into chunks

Slice Content will split text every time it reaches a new `<h3>` tag (or any tag you choose) and return the sections of content to use anywhere on the page.

## Demo

[Live demo on Codepen](https://codepen.io/joe_sandwich/pen/XWKjKzV)

![Slice Content Gif](readme/extract-codepen-example.gif)

## Use Cases

To avoid restrictions in a CMS e.g. Shopify, which only uses a single wysiwyg editor for product descriptions.

Often this doesn't give enough flexibility to present information to the user in a more structured way eg. in an accordion, tabs or in different containers. 

Slice Content gives a dependency free, client-friendly solution by allowing text to be separated by natural dividers in the text.


## Usage

`new SliceContent("your html selector", "parent element in DOM")`

Basic:

```js

import SliceContent from 'SliceContent'

const slices = new SliceContent();

console.log(slices);

```

Advanced:

```js

import SliceContent from 'SliceContent'

const slices = new SliceContent({
    selector: "h3", 
    parent: ".card",
    output: ""
});
console.log(slices);

```

## Browser support
Slice Content is supported in recent versions of the following browsers:

- Google Chrome
- Firefox
- Edge
- Safari

Support can be extended through [Polyfill.io](https://polyfill.io/v3/)


## Roadmap

### v2

* ES9 Revised build
* Toggleable .format() function to stop Split Content working it's magic straight away
* Configurable array output to support JSON
* Inline script improvement - asynchronous loading
* Detatch function from window