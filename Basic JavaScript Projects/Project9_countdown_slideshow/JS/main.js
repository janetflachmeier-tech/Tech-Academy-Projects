// Countdown Timer Function
function countdown() {
    var seconds = document.getElementById("seconds").value;
    
    // Validate input
    if (seconds === "" || seconds <= 0) {
        alert("Please enter a valid number of seconds!");
        return;
    }
    
    function tick() {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds + " seconds remaining";
        
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            document.getElementById("timer").innerHTML = "Time's up!";
            alert("Time's up!");
        }
    }
    
    tick();
}

// Slideshow Variables
let currentSlideIndex = 0;
let autoPlayInterval = null;
let isAutoPlaying = false;

// Get all slides and dots
function getSlides() {
    return document.querySelectorAll('.slide');
}

function getDots() {
    return document.querySelectorAll('.dot');
}

// Show specific slide by index
function showSlide(index) {
    const slides = getSlides();
    const dots = getDots();
    
    // Wrap around if index is out of bounds
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide and activate corresponding dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Change slide by direction (1 for next, -1 for previous)
function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Go to specific slide (called by dot clicks)
function currentSlide(slideNumber) {
    showSlide(slideNumber - 1); // Convert to 0-based index
}

// Next slide function
function nextSlide() {
    changeSlide(1);
}

// Previous slide function
function previousSlide() {
    changeSlide(-1);
}

// Auto-play functionality
function startAutoPlay() {
    if (!isAutoPlaying) {
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
        
        isAutoPlaying = true;
        updateAutoPlayStatus();
    }
}

function stopAutoPlay() {
    if (isAutoPlaying) {
        clearInterval(autoPlayInterval);
        isAutoPlaying = false;
        updateAutoPlayStatus();
    }
}

// Update auto-play status display
function updateAutoPlayStatus() {
    const statusElement = document.getElementById('autoPlayStatus');
    if (statusElement) {
        statusElement.textContent = isAutoPlaying ? 'Auto-play: Running' : 'Auto-play: Stopped';
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            previousSlide();
            break;
        case 'ArrowRight':
            nextSlide();
            break;
        case ' ': // Spacebar to toggle auto-play
            event.preventDefault();
            if (isAutoPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
            break;
    }
});

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0); // Show first slide
    updateAutoPlayStatus();
    
    // Optional: Start auto-play automatically
    // setTimeout(startAutoPlay, 2000); // Start auto-play after 2 seconds
    
    console.log('Slideshow initialized with', getSlides().length, 'slides');
});

// Pause auto-play when user manually navigates
function pauseAutoPlayTemporarily() {
    if (isAutoPlaying) {
        stopAutoPlay();
        // Resume auto-play after 5 seconds of inactivity
        setTimeout(() => {
            if (!isAutoPlaying) {
                startAutoPlay();
            }
        }, 5000);
    }
}

// Enhanced slide change function with temporary pause
function changeSlideWithPause(direction) {
    pauseAutoPlayTemporarily();
    changeSlide(direction);
}

// Enhanced current slide function with temporary pause
function currentSlideWithPause(slideNumber) {
    pauseAutoPlayTemporarily();
    currentSlide(slideNumber);
}