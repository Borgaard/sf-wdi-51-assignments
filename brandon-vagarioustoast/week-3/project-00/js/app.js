console.log(`We're online.`);

document.addEventListener('DOMContentLoaded', () => {
    // Materialize Methods

    let elems = document.querySelectorAll('.materialboxed');
    let carouselImages = document.querySelectorAll('.carousel');
    let sideNavElem = document.querySelectorAll('.sidenav');

    let instances = M.Materialbox.init(elems);
    let carouselInstance = M.Carousel.init(carouselImages, {
      autoplay: true,
    });
    let sideNavInstance = M.Sidenav.init(sideNavElem);



    // Disable Submit For Now
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', (e)=>{
      e.preventDefault();
    })




  })
