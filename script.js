const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300.jpg"
];

// Duplicate one random image
const duplicateImage = images[Math.floor(Math.random() * images.length)];
const imageArray = [...images, duplicateImage];

// Shuffle the images
const shuffledImages = imageArray.sort(() => Math.random() - 0.5);

// Display the images
const imageContainer = document.getElementById('image-container');
shuffledImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', () => handleImageClick(src, img));
    imageContainer.appendChild(img);
});

let selectedImages = [];

// Handle image click
function handleImageClick(src, img) {
    if (selectedImages.length < 2 && !selectedImages.includes(src)) {
        selectedImages.push(src);
        img.classList.add('selected'); // Highlight selected image
        document.getElementById('reset').style.display = 'block'; // Show Reset button
    }
    if (selectedImages.length === 2) {
        document.getElementById('verify').style.display = 'block'; // Show Verify button
    }
}

// Reset functionality
document.getElementById('reset').addEventListener('click', () => {
    selectedImages = [];
    document.querySelectorAll('.selected').forEach(img => img.classList.remove('selected'));
    document.getElementById('reset').style.display = 'none';
    document.getElementById('verify').style.display = 'none';
    document.getElementById('result').textContent = ''; // Clear result message
});

// Verification functionality
document.getElementById('verify').addEventListener('click', () => {
    const [firstSelected, secondSelected] = selectedImages;
    if (firstSelected === secondSelected) {
        document.getElementById('result').textContent = 'You are a human. Congratulations!';
    } else {
        document.getElementById('result').textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
    document.getElementById('verify').style.display = 'none'; // Hide Verify button
});