// Select the elements
const prevBtn = document.querySelector('.ctrl-prev');
const nextBtn = document.querySelector('.ctrl-next');
const headerSlider = document.querySelector('.header-slider ul');

// Set initial counter for images
let counter = 0;

// Add click event listeners to the previous and next buttons
prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = headerSlider.children.length - 1;
    }
    changeImage();
});

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= headerSlider.children.length) {
        counter = 0;
    }
    changeImage();
});

// Function to change the image
function changeImage() {
    const images = headerSlider.children;
    images[counter].style.display = 'block';
    for (let i = 0; i < images.length; i++) {
        if (i !== counter) {
            images[i].style.display = 'none';
        }
    }
}

// Automatically change the image every 3 seconds
setInterval(changeImage, 3000);
