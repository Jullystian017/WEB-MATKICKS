// Toggle Search Bar
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'none' || searchBar.style.display === '' ? 'flex' : 'none';
   
}


// Redirect to Login Page
function goToLogin() {
    window.location.href = 'login.html';
}

// Toggle Cart Popup
function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = cartPopup.style.display === 'none' || cartPopup.style.display === '' ? 'block' : 'none';
}

// Slider Functionality
let currentSlide = 0;

function showSlide(index) {
    const sliderWrapper = document.getElementById('sliderWrapper');
    const totalSlides = sliderWrapper.children.length;
    currentSlide = (index + totalSlides) % totalSlides;
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Scroll ke kiri
function scrollLeft() {
  const boxContainer = document.querySelector(".products .box-container");
  boxContainer.scrollBy({ left: -100, behavior: "smooth" });
}

function scrollRight() {
    const boxContainer = document.querySelector(".products .box-container");
    boxContainer.scrollBy({ left: 200, behavior: "smooth" });
  }


