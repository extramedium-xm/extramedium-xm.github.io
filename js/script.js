
//import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
//import {OrbitControls} from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

//obj loaders
//import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';


//page transition
/*
window.addEventListener('DOMContentLoaded', function () {
  var pageLinks = document.getElementsByClassName('page-link');
  for (var i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener('click', handleLinkClick);
  }

  function handleLinkClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    var linkUrl = event.target.href; // Get the link URL

    setTimeout(function () {
      window.location.href = linkUrl; // Navigate to the link URL
    }, 1000); // Delay of 1 second (1000 milliseconds) before navigating to the link
  }
});

*/
window.addEventListener('DOMContentLoaded', function () {
  var pageTransition = document.getElementById('page-transition');
  var background = document.getElementById('background-loader');

  pageTransition.style.transform = 'translateY(0)';

  setTimeout(function () {
    pageTransition.style.transform = 'translateY(100%)';
    background.style.opacity = '0';
    background.classList.add('hidden-bg-loader');
  }, 1000); // Delay of 1 second (1000 milliseconds) before hiding the red block and fading the background
});





//toogle dark mode + session
const darkModeSwitch = document.querySelector('.dark-mode-switch');
const body = document.body;
const docElement = document.documentElement;


darkModeSwitch.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    
    darkModeSwitch.classList.toggle('active');
    body.classList.toggle('dark-mode');
    docElement.classList.toggle('dark-mode');

    // Store the mode preference in local storage
    localStorage.setItem('darkMode', !isDarkMode);
  });


// Function to check and apply the stored mode preference
function applyStoredModePreference() {
  const body = document.body;
  const storedMode = localStorage.getItem('darkMode');

  if (storedMode === 'true') {
    body.classList.add('dark-mode');
    darkModeSwitch.classList.add('active');
    docElement.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    darkModeSwitch.classList.remove('active');
    docElement.classList.remove('dark-mode');
  }
}

// Call the applyStoredModePreference function when the page loads
document.addEventListener('DOMContentLoaded', applyStoredModePreference);














//lazyload

const lazyLoadImage = document.querySelectorAll(".lazy-img");
//const lazyLoadImageBig = document.querySelectorAll(".lazy-img-big");
//console.log("fattoooooo");
//console.log(lazyLoadImage);



let options = {
  threshold: 0
};

let optionsBig = {
  threshold: 0
};

let observer = new IntersectionObserver(imageObserver, options);

//let observerBig = new IntersectionObserver(imageObserver, optionsBig);

function imageObserver(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const img = entry.target;
      const img_src = img.dataset.src;
      //console.log("Lazy loading " + img);
      //console.log(img);
      img.src = img_src;


      
      img.onload = function() {
        //this.classList.add("remove-pixelated");
        //rimuovo pixaleted dopo che l'immagine è stata caricata
        setTimeout(() => {
          this.classList.add("remove-blur");
         }, "300")
        //console.log("caricattt");
      };
      img.onloadeddata = function() {
        this.classList.add("remove-blur");
        //console.log("caricattt");
      };

      //setTimeout(() => {
      //  img.classList.add("remove-pixelated");
      //}, "1000")

      
      

      
      
      
      observer.unobserve(img);
    }
  });
}

let lazyItems = document.querySelectorAll(".lazy-img");

lazyItems.forEach(img => {
  observer.observe(img);
});

let lazyItemsBig = document.querySelectorAll(".lazy-img-big");

lazyItemsBig.forEach(img => {
  observerBig.observe(img);
});





//hover show projects
/*
let previewProjectsActive = false;
let previewProjectsBtn = document.querySelector('.preview-projects-btn');
let projectsWrapper = document.querySelector('.proj-section');

previewProjectsBtn.addEventListener("mouseover", function( event ) {
  if(!previewProjectsActive){
    projectsWrapper.classList.add('show-preview-projects');
    previewProjectsActive = true;
  }
}, false);

previewProjectsBtn.addEventListener("mouseleave", function( event ) {
  if(previewProjectsActive){
    projectsWrapper.classList.remove('show-preview-projects');
    previewProjectsActive = false;
  }
}, false);

previewProjectsBtn.addEventListener("click", function( event ) {
  let pageHeight = window.innerHeight;

  projectsWrapper.classList.remove('show-preview-projects');
    previewProjectsActive = false;
    
  window.scroll({
    top: pageHeight,
    behavior: 'smooth'
  });
}, false);
*/







/**/



//custom cursor topolino
var cursorCustom = document.querySelector('.custom-cursor');
const projCardLinks = document.querySelectorAll('.proj-card-link');

if(cursorCustom){
  document.addEventListener("DOMContentLoaded", function(e) {
    cursorCustom.style.left = e.clientX + "px";
    cursorCustom.style.top = e.clientY+ "px";
  });
  document.addEventListener('mousemove', function(e){
    var xClick = e.clientX;
    var yClick = e.clientY;
    cursorCustom.style.left = xClick + "px";
    cursorCustom.style.top = yClick + "px";
  });
  
}
if(cursorCustom && projCardLinks) {
  projCardLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (window.innerWidth > 600) {
        cursorCustom.classList.add('cursor-active');
      }
    });

    link.addEventListener('mouseleave', () => {
      if (window.innerWidth > 600) {
        cursorCustom.classList.remove('cursor-active');
      }
      
    });
  });
} 




//dvd effect
function startDVDscreensaver() {
  let dvdImages = [];
  let timeoutId;

  // Create a new DVD image element and add it to the overlay
  function createDVDImage() {
    const img = document.createElement('img');
    img.src = '/assets/topolino-b.svg';
    img.classList.add('dvd-image');
    document.querySelector('#dvd-overlay').appendChild(img);
    return img;
  }

  // Animate a DVD image
  function animateDVDImage(image) {
    // Get random initial positions
    let posX = Math.random() * (window.innerWidth - image.width);
    let posY = Math.random() * (window.innerHeight - image.height);

    // Set initial position
    image.style.left = posX + 'px';
    image.style.top = posY + 'px';

    // Generate random angle deltas
    let angleDeltaX = Math.random() * 6 - 3; // Random value between -3 and 3
    let angleDeltaY = Math.random() * 6 - 3; // Random value between -3 and 3

    // Animation function
    const animate = () => {
      posX += angleDeltaX;
      posY += angleDeltaY;

      // Reverse direction upon reaching boundaries
      if (posX < 0 || posX > window.innerWidth - image.width) {
        angleDeltaX *= -1;
      }
      if (posY < 0 || posY > window.innerHeight - image.height) {
        angleDeltaY *= -1;
      }

      // Update image position
      image.style.left = posX + 'px';
      image.style.top = posY + 'px';

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  // Generate a new DVD image and animate it
  function generateDVDImage() {
    const dvdImage = createDVDImage();
    animateDVDImage(dvdImage);
    dvdImages.push(dvdImage);
  }

  // Remove all DVD images
  function removeDVDImages() {
    dvdImages.forEach((image) => {
      image.style.opacity = 0; // Set opacity to 0 for fade-out effect
      setTimeout(() => {
        image.remove();
      }, 300); // Delay removal to match the transition duration (0.3s)
    });
    dvdImages = [];
  }

  // Generate DVD images with a delay between each
  function generateDVDImagesWithDelay() {
    generateDVDImage();
    timeoutId = setTimeout(generateDVDImagesWithDelay, 4000); // Delay in milliseconds (1 second)
  }

  // Start the screensaver when the page is loaded
  document.addEventListener('DOMContentLoaded', () => {
    let inactivityTimeoutId;

    // Function to start the screensaver
    function startScreensaver() {
      clearTimeout(inactivityTimeoutId);
      clearTimeout(timeoutId);
      generateDVDImagesWithDelay();
    }

    // Function to stop the screensaver
    function stopScreensaver() {
      clearTimeout(inactivityTimeoutId);
      clearTimeout(timeoutId);
      removeDVDImages();
      inactivityTimeoutId = setTimeout(startScreensaver, 300000); // Restart screensaver after 10 seconds of inactivity
    }

    // Start the initial inactivity timeout
    inactivityTimeoutId = setTimeout(startScreensaver, 300000); // Start screensaver after 10 seconds of inactivity

    // Add event listeners to detect user activity
    document.addEventListener('keydown', stopScreensaver);
    document.addEventListener('mousemove', stopScreensaver);
    document.addEventListener('mousedown', stopScreensaver);
    document.addEventListener('wheel', stopScreensaver);
  });
}
if (window.innerWidth > 600) {
  startDVDscreensaver();
}


//copy to clipboard
function copyEmailToClipboard() {
  var emailElement = this; // The clicked element
  var email = "huiling.li.cn@gmail.com" // Get the email address from the element

  // Add email to clipboard
  navigator.clipboard.writeText(email)
    .then(function() {
      // Successful copy
      emailElement.classList.add('active');
      setTimeout(function() {
        emailElement.classList.remove('active');
      }, 2000); // Remove 'active' class after 3 seconds
    })
    .catch(function(err) {
      // Error handling
      console.error('Failed to copy email to clipboard: ', err);
    });
}

// Add event listeners to all elements with class "email-clipboard"
var emailElements = document.querySelectorAll('.email-clipboard');
emailElements.forEach(function(element) {
  element.addEventListener('click', copyEmailToClipboard);
});
