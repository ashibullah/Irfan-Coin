let coinCount = 0;

// Select the coin image and the counter display
const coinImage = document.getElementById('coinImage');
const coinCountDisplay = document.getElementById('coinCount');

// Add a click event listener to the coin image
coinImage.addEventListener('click', () => {
    coinCount++;
    coinCountDisplay.textContent = coinCount;
});
