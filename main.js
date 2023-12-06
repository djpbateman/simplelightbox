/**
 * SimpleLightbox
 *
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */
class SimpleLightbox {
  static openLightbox(element) {
    const dataContainer = element;

    if (!dataContainer) {
      console.error('No container found.');
      return;
    }

    let lightbox = document.querySelector('.simple-lightbox');

    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.classList.add('simple-lightbox');
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
          document.body.removeChild(lightbox);
        }
      });
    }

    lightbox.innerHTML = dataContainer.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const simplelightboxElements = document.querySelectorAll('[data-simple-lightbox]');

  for (const element of simplelightboxElements) {
    element.addEventListener('click', () => {
      SimpleLightbox.openLightbox(element);
    });
  }
});
