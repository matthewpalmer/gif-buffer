# Gif Buffer

> Wait for a gif to buffer and load, then display it.

Displays a regular image until the requested gif has finished downloading, then displays and animates the gif. No more stuttering gifs.

## Usage

**Requires jQuery and HTML5.**

Include `jquery.min.js` and `gif-buffer.js`, then simply set the image's `class`, `src`, and `data-gif-src`.

```html
<img class = 'gif-buffer' src = "image.jpg" data-gif-src = "image.gif"/>
```

## Demo

[Gif Buffer Demo Page](http://matthewpalmer.net/gif-buffer/)

## Example
```html
<html>
  <head>
    <script src = 'jquery.min.js'></script>
    <script src = 'gif-buffer.js'></script>
  </head>
  <body>
    <p>Welcome to Gif Buffer.</p>
    <img class = 'gif-buffer' src = "image.jpg" data-gif-src = "image.gif" width = "400"/>
    <img class = 'gif-buffer' src = "anotherImage.png" data-gif-src = "anotherImage.gif" width = "400"/>
  </body>
</html>
```
