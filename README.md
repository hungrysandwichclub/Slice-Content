![Extract text Gif](readme/extract-codepen-example.gif)

# Extract Text splits WYSIWYG content into chunks

Extract text will split text every time it reaches a new <h3> tag (or any tag you choose) and return the sections of content to use anywhere on the page.

## Demo

[Live demo on Codepen](https://codepen.io/joe_sandwich/pen/XWKjKzV)

## Use Cases

To avoid restrictions in a CMS e.g. Shopify, which only uses a single wysiwyg editor for product descriptions.

Often this doesn't give enough flexibility to present information to the user in a more structured way eg. in an accordion, tabs or in different containers. 

Extract Text gives a client-friendly solution by allowing text to be separated by natural dividers in the text.


## Usage

`new ExtractText("your html selector", "parent element in DOM")`

Basic:

```js

Import ExtractText from 'extractText'

const extract = new ExtractText();

console.log(extract);

```

Advanced:

```js

Import ExtractText from 'extractText'

const extract = new ExtractText({
    selector: "h3", 
    parent: ".card",
    output: ""
});
console.log(extract);

```

## Browser support
Extract Text is supported in recent versions of the following browsers:

Google Chrome
Firefox
Edge
Safari

Support can be extended through polyfills or a service like polyfill.io

## Roadmap


# Extract Text splits WYSIWYG content into chunks

Extract text will split text every time it reaches a new <h3> tag (or any tag you choose) and return the sections of content to use anywhere on the page.

## Demo

[Live demo on Codepen](https://codepen.io/joe_sandwich/pen/XWKjKzV)

## Use Cases

To avoid restrictions in a CMS e.g. Shopify, which only uses a single wysiwyg editor for product descriptions.

Often this doesn't give enough flexibility to present information to the user in a more structured way eg. in an accordion, tabs or in different containers. 

Extract Text gives a client-friendly solution by allowing text to be separated by natural dividers in the text.


## Usage

`new ExtractText("your html selector", "parent element in DOM").format()`

Basic:

```js

Import ExtractText from 'extractText'

const extract = new ExtractText();

console.log(extracts);

```

Advanced:

```js

Import ExtractText from 'extractText'

const extract = new ExtractText({
    selector: "h3", 
    parent: ".card",
    output: ""
});
console.log(extracts);

```

## Browser support
Extract Text is supported in recent versions of the following browsers:

Google Chrome
Firefox
Edge
Safari

Support can be extended through polyfills or a service like polyfill.io

## Roadmap
