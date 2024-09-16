const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// app.js

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent'); // Get the percentage from data attribute
        const fillElement = bar.querySelector('.fill'); // Select the fill element

        // Set the width of the fill element to the specified percent after a short delay
        setTimeout(() => {
            fillElement.style.width = percent; // Fill to the desired percent
        }, 100); // Delay for better visibility of effect
    });
});

const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderImages = document.querySelectorAll('.slider-img');

// Create a clone of the slider to achieve seamless looping
const sliderClone = sliderWrapper.cloneNode(true);
sliderWrapper.appendChild(sliderClone);

// Set the total width of the slider
function setSliderWidth() {
    const totalWidth = sliderImages.length * (100 + 5); // 100px width + 5px margin
    sliderWrapper.style.width = `${totalWidth}px`;
}

// Call the function to set the width
setSliderWidth();
