const carImage = document.getElementById('carImage');
let currentImage = 1015;
const images = [1015, 106, 201, 1070];

let isDragging = false;
let startX = 0;

// Mouse drag
function dragStart(e) {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    carImage.style.transition = 'none';
}

function dragMove(e) {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const diff = (x - startX) / 5;
    carImage.style.transform = `rotateY(${diff}deg)`;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    carImage.style.transition = 'transform 0.5s';
    carImage.style.transform = 'rotateY(0deg)';
}

// Touch swipe
carImage.addEventListener('mousedown', dragStart);
carImage.addEventListener('mousemove', dragMove);
carImage.addEventListener('mouseup', dragEnd);
carImage.addEventListener('mouseleave', dragEnd);

carImage.addEventListener('touchstart', dragStart);
carImage.addEventListener('touchmove', dragMove);
carImage.addEventListener('touchend', dragEnd);

function nextCar() {
    currentImage = (currentImage + 1) % images.length;
    carImage.src = `https://picsum.photos/id/${images[currentImage]}/1200/600`;
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextCar();
    if (e.key === 'ArrowLeft') {
        currentImage = (currentImage - 1 + images.length) % images.length;
        carImage.src = `https://picsum.photos/id/${images[currentImage]}/1200/600`;
    }
});