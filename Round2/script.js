// const imageElement = document.querySelector("#play-button");

// imageElement.addEventListener("click", function() {
//   imageElement.src = "Images/Pause.png";
// });
// const imageElement = document.querySelector("#play-button");

// const playImage = "Images/Play.png";
// const pauseImage = "Images/Pause.png";

// imageElement.src = playImage;

// imageElement.addEventListener("click", () => {

//   if (imageElement.src === playImage) {
//     imageElement.src = pauseImage;
//   } else {
//     imageElement.src = playImage;
//   }

// });

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
