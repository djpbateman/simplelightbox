/**
 * SimpleLightbox
 *
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */
class SimpleLightbox {
  static openLightbox(element) {
    const dataContainer = element;

    if (!dataContainer) {
      throw new Error('No container found.');
    }

    let lightbox = document.querySelector('.simple-lightbox');

    if (!lightbox) {
      lightbox = this.createLightbox();
    }

    lightbox.innerHTML = dataContainer.innerHTML;
  }

  static createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.classList.add('simple-lightbox');
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        document.body.removeChild(lightbox);
      }
    });

    return lightbox;
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
