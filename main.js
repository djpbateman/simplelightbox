/**
 * SimpleLightbox
 *
 * Licensed under MIT (https://github.com/djpbateman/simplelightbox/blob/main/LICENSE)
 */
class SimpleLightbox {
  static openLightbox(element) {
    const items = document.querySelectorAll('[data-simple-lightbox]');
    const itemArray = Array.from(items);

    const index = itemArray.indexOf(element);

    if (index === -1) {
      throw new Error('Element not found in gallery.');
    }

    let lightbox = document.querySelector('.simple-lightbox');

    if (!lightbox) {
      lightbox = this.createLightbox(itemArray.length > 1);
    }

    this.showContent(lightbox, index, itemArray);
    this.boundHandleKeydown = this.handleKeydown.bind(this);
    document.addEventListener('keydown', this.boundHandleKeydown);
  }

  static createLightbox(hasMultipleItems) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('simple-lightbox');

    if (hasMultipleItems) {
      this.addNavigationButtons(lightbox);
    }

    const content = document.createElement('div');
    content.classList.add('content');
    lightbox.appendChild(content);

    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        document.body.removeChild(lightbox);
        document.removeEventListener('keydown', this.boundHandleKeydown);
      }
    });

    return lightbox;
  }

  static addNavigationButtons(lightbox) {
    ['prev', 'next'].forEach((type) => {
      const button = document.createElement('button');
      button.innerHTML = type === 'prev' ? '&#10094;' : '&#10095;';
      button.classList.add(type);
      lightbox.appendChild(button);

      button.addEventListener('click', (event) => {
        event.stopPropagation();
        this.navigateContent(lightbox, type === 'prev' ? -1 : 1);
      });
    });
  }

  static showContent(lightbox, index, items) {
    const content = lightbox.querySelector('.content');
    content.innerHTML = '';
    const img = items[index].querySelector('img').cloneNode(true);
    content.appendChild(img);
    lightbox.dataset.currentIndex = index;
  }

  static navigateContent(lightbox, direction) {
    const items = document.querySelectorAll('[data-simple-lightbox]');
    const itemArray = Array.from(items);

    let currentIndex = parseInt(lightbox.dataset.currentIndex);
    currentIndex = (currentIndex + direction + itemArray.length) % itemArray.length;

    this.showContent(lightbox, currentIndex, itemArray);
  }

  static handleKeydown(event) {
    const lightbox = document.querySelector('.simple-lightbox');
    if (lightbox) {
      if (event.key === 'ArrowLeft') {
        this.navigateContent(lightbox, -1);
      } else if (event.key === 'ArrowRight') {
        this.navigateContent(lightbox, 1);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    const element = event.target.closest('[data-simple-lightbox]');
    if (element) {
      SimpleLightbox.openLightbox(element);
    }
  });
});
