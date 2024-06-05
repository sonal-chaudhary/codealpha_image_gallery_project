const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

function updateGallery() {
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}
