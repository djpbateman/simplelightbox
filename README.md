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

If there are several elements with the attribute it will create a navigable gallery.

```html
<div class="image-item" data-simple-lightbox>
    <img src="/path/to/image.webp" alt="">
</div>

<div class="image-item" data-simple-lightbox>
    <img src="/path/to/image.webp" alt="">
</div>

<div class="image-item" data-simple-lightbox>
    <img src="/path/to/image.webp" alt="">
</div>
```

There are no styles bundled with this library, so you have complete flexibility to do as you please.
Here's a basic example:
```css
.simple-lightbox {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
}

img {
    max-width: 100%;
    height: 80vh;
}

button {
    margin: 0 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 2em;
    cursor: pointer;
}
```


