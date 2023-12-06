# Simple Lightbox

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Simple Lightbox is a lightweight JavaScript library for creating a custom lightbox.

## Installation

Include the script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/djpbateman/simplelightbox@latest/main.js"></script>
```

## Usage

Add the `data-simple-lightbox` attribute to any container element to duplicate the content into a lightbox.

```html
<div class="video-container" data-simple-lightbox>
  <video width="320" height="240" controls>
    <source src="path/to/video.mp4" type="video/mp4">
    <source src="path.to/video.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</div>
```

There are no styles bundled with this library, so you have complete flexibility to do as you please.
Here's a basic example:
```css
.simple-lightbox {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
}
```


