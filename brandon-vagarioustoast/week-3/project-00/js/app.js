document.addEventListener('DOMContentLoaded', () => {
    // Materialize Methods

    const boxedElems = document.querySelectorAll('.materialboxed');
    const carouselImages = document.querySelectorAll('.carousel');
    const sideNavElem = document.querySelectorAll('.sidenav');
    const slideElems = document.querySelectorAll('.slider');

    // Materialize Methods

    let sliderInstance = M.Slider.init(slideElems);
    let boxInstances = M.Materialbox.init(boxedElems);
    let carouselInstance = M.Carousel.init(carouselImages, {
      autoplay: true,
    });
    let sideNavInstance = M.Sidenav.init(sideNavElem);

    // Disable Submit For Now

    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', (e)=>{
      e.preventDefault();
    })
  });
