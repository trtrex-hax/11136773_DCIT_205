
document.addEventListener('click',e=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
        if (dropdown === currentdropdown) return
        dropdown.classList.remove('active')
    })
})


//code to close all active dropdowns except the one you just clicked on. 

const navigation =
    document.querySelector(".primary-navigation");

const navigationHeight = 
    navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"

);

function showLoginForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
  }

  function showSignupForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
  }

  let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-items');

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
  slides[slideIndex].classList.add('fade');
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Automatic slideshow
function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

window.onload = autoSlide;
