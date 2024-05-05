const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let counter = 0;
const slideWidth = slide[0].clientWidth;

// Create dots for each slide
slide.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('data-slide', index);
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[counter].classList.add('active');

slides.style.transform = `translateX(${-counter * slideWidth}px)`;

// Function to move to a specific slide
function goToSlide(slideIndex) {
    slides.style.transition = 'transform 1s ease';
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    counter = slideIndex;

    // Update active dot
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Automatic slideshow
setInterval(() => {
    counter++;
    goToSlide(counter);

    if (counter === slide.length) {
        counter = 0;
        goToSlide(counter);
    }
}, 3000);



function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
