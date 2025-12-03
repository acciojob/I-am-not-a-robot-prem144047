//your code here
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img1.jpg']; // Example
const shuffledImages = images.sort(() => Math.random() - 0.5);

let selectedImages = [];
const imageContainer = document.getElementById('image-container');

shuffledImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', () => {
        if (selectedImages.length < 2 && !selectedImages.includes(src)) {
            selectedImages.push(src);
            img.classList.add('selected'); // Add a class to visually indicate selection
            document.getElementById('reset').style.display = 'block';
        }
        if (selectedImages.length === 2) {
            document.getElementById('verify').style.display = 'block';
        }
    });
    imageContainer.appendChild(img);
});


document.getElementById('reset').addEventListener('click', () => {
    selectedImages = [];
    document.querySelectorAll('.selected').forEach(img => img.classList.remove('selected'));
    document.getElementById('reset').style.display = 'none';
    document.getElementById('verify').style.display = 'none';
    document.getElementById('result').textContent = '';
});

document.getElementById('verify').addEventListener('click', () => {
    if (selectedImages[0] === selectedImages[1]) {
        document.getElementById('result').textContent = 'You are a human. Congratulations!';
    } else {
        document.getElementById('result').textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
    document.getElementById('verify').style.display = 'none'; // Hide verify button
});