// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
  }
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
  }






$('.companyCarousels').owlCarousel({
    loop:true,
    margin:250,
    nav:false,
    autoplay: true,       // Enable auto-rotation
    autoplayTimeout: 3000, // Time between each auto-rotate (in milliseconds)
    autoplayHoverPause: true, // Pause on mouse hover
    dots: false,          // Hide dots (pagination indicators)
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.assistantCarousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    navText: [
        '<img src="assets/imgaes/carouselArrow.svg" alt="Previous">',
        '<img src="assets/imgaes/carousel-arrow.svg" alt="Next">'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('.internationalCarousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    stagePadding: 50, // Adjust this value to control the visibility of the first and last images
    responsive: {
        0: {
            items: 1,
            stagePadding: 50  // Adjust for smaller screens if needed
        },
        600: {
            items: 2,
            stagePadding: 75 // Adjust for medium screens
        },
        1000: {
            items: 3,
            stagePadding: 200 // Adjust for larger screens
        }
    }
});
// facilitatorCarousel

$('.facilitatorCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<img src="assets/imgaes/carouselArrow.svg" alt="Previous">',
        '<img src="assets/imgaes/carousel-arrow.svg" alt="Next">'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})