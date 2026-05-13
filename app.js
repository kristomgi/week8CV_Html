const images = ['cv_portree.jpg', 'pilt2.png', 'pilt3.jpg', 'pilt4.jpg'];
const targetImage = document.getElementById('carousel-image');
let currentIndex = 0;

function updateImage() {
    targetImage.style.opacity = '0';
    setTimeout(() => {
        targetImage.src = 'images/' + images[currentIndex];
        targetImage.style.opacity = '1';
    }, 200);
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
