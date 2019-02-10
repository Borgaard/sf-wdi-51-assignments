console.log(`We're online.`);

document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.materialboxed');
    let carouselImages = document.querySelectorAll('.carousel');

    let instances = M.Materialbox.init(elems);
    let carouselInstance = M.Carousel.init(carouselImages, {
      autoplay: true,
    })
  })
