/* variables */
let container = document.querySelector('.container');
let images = [
    'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg',
    'https://images.pexels.com/photos/2190209/pexels-photo-2190209.jpeg',
    'https://images.pexels.com/photos/950049/pexels-photo-950049.jpeg',
    'https://images.pexels.com/photos/4597117/pexels-photo-4597117.jpeg',
    'https://images.pexels.com/photos/1770705/pexels-photo-1770705.jpeg'
];

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;
    let imagesIndex = Math.floor(scrollPosition / viewportHeight) % images.length;
    container.style.backgroundImage = `url(${images[imagesIndex]})`;
});
