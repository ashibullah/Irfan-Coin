// script.js

let coinCount = 0;
let boomTime = false;
let coinRainActive = false; // Flag to track if coin rain is active
let coinRainTimeout; // Variable to hold the timeout ID
let energyLevel = 1000; // Initial energy level

// Select elements
const coinButton = document.getElementById('coinButton');
const coinCountDisplay = document.getElementById('coinCount');
const rocketButton = document.getElementById('rocketButton');
const boomMessage = document.getElementById('boomMessage');
const progressBar = document.getElementById('progress');
const energyLevelDisplay = document.getElementById('energyLevelDisplay');

// Function to update the progress bar based on energy level
function updateProgressBar() {
    const progressWidth = (energyLevel / 1000) * 100 + '%';
    progressBar.style.width = progressWidth;
}

// Function to update energy level display
function updateEnergyLevelDisplay() {
    energyLevelDisplay.textContent = `Energy: ${energyLevel}`;
}

// Function to refill energy level
function refillEnergy() {
    if (energyLevel < 1000) {
        energyLevel++;
        updateProgressBar();
        updateEnergyLevelDisplay();
    }
}

// Interval to refill energy level every 2 seconds
setInterval(refillEnergy, 2000);

// Function to show the rocket button in a random position
function showRocket() {
    // Calculate random position
    const randomX = Math.random() * (window.innerWidth - rocketButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - rocketButton.offsetHeight);

    // Set position
    rocketButton.style.left = `${randomX}px`;
    rocketButton.style.top = `${randomY}px`;

    // Show rocket button
    rocketButton.classList.remove('hidden');

    // Set timeout to hide rocket button after 10 seconds
    setTimeout(() => {
        rocketButton.classList.add('hidden');
    }, 10000);
}

// Function to handle rocket button click
function handleRocketButtonClick() {
    // Show boom message
    boomMessage.classList.remove('hidden');
    setTimeout(() => {
        boomMessage.classList.add('hidden');
    }, 1000);

    // Activate boom-time for 30 seconds
    boomTime = true;
    setTimeout(() => {
        boomTime = false;
    }, 30000);
}

// Add event listener to the coin button
coinButton.addEventListener('click', () => {
    if (energyLevel > 0) {
        if (boomTime) {
            coinCount += 10;
        } else {
            coinCount++;
        }
        coinCountDisplay.textContent = coinCount;
        energyLevel--;
        updateProgressBar();
        updateEnergyLevelDisplay();
    }
});

// Set interval to show rocket button every 5 seconds
setInterval(() => {
    showRocket();
}, 5000);

// Add click event listener to the rocket button
rocketButton.addEventListener('click', () => {
    handleRocketButtonClick();
});

// Initial update of energy level display
updateEnergyLevelDisplay();
