// Get the element by its ID
const toggleButton = document.getElementById('play-button');

// Set initial state and image source
let isPlaying = false;
let imageSrc = 'Images/Play.png';

// Add click event listener
toggleButton.addEventListener('click', function() {
  // Toggle the state and update the image source
  isPlaying = !isPlaying;
  imageSrc = isPlaying ? 'Images/Pause.png' : 'Images/Play.png';
  
  // Update the image source
  toggleButton.src = imageSrc;
});
