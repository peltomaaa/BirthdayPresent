const imageUrls = [
    'images/present.png',
    'images/present.png',
    'images/present.png',
    'images/present1.png',
    'images/present2.png',
    'images/present3.png',
    'images/present4.png',
    'images/present5.png',
    'images/present6.png',
    'images/present7.png',
    'images/present8.png',
    'images/present9.png',
    'images/present10.png',
    'images/present11.png',
    'images/present12.png',
    'images/present13.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',
    'images/present14.png',


    // Add more image URLs as needed
];

let currentImageIndex = 0;
let autoAnimationInterval;

const presentAnimation = document.getElementById('presentAnimation');

function startAnimation() {
    presentAnimation.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;

    // Check if it's the last image
    if (currentImageIndex === imageUrls.length - 1) {
        // Stop the automatic animation when reaching the last image
        clearInterval(autoAnimationInterval);
        autoAnimationInterval = null;

        // Navigate to the next page
        window.location.href = 'nextPage.html';
    }

    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

function toggleAutoAnimation() {
    // Check if it's the last image
    if (currentImageIndex === imageUrls.length - 1) {
        // Navigate to the next page
        window.location.href = 'nextPage.html';
    } else {
        // Toggle automatic animation on click for non-last images
        if (autoAnimationInterval) {
            clearInterval(autoAnimationInterval);
            autoAnimationInterval = null;
        } else {
            startAnimation(); // Start the animation immediately
            autoAnimationInterval = setInterval(startAnimation, 600); // Adjust the interval as needed (2000 milliseconds = 2 seconds)
        }
    }
}