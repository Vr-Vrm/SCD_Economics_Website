/*let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const overlayTitle=document.getElementById('overlayTitle');
const overlaySubtitle=document.getElementById('overlaySubtitle');

const maxSlides = 4; // Only loop through the first 4 slides


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    const activeSlide = slides[index];
    overlayTitle.textContent = activeSlide.getAttribute('data-title');
    overlaySubtitle.textContent = activeSlide.getAttribute('data-subtitle');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % maxSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000); */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); 
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    const activeSlides = slides[index];
    overlayTitle.textContent = activeSlides.getAttribute('data-title');
    overlaySubtitle.textContent = activeSlides.getAttribute('data-subtitle');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000);






document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const selectedTopic = button.getAttribute('data-topic');

            // Show or hide articles based on the selected topic
            articleCards.forEach(card => {
                const cardTopics = card.getAttribute('data-topics');
                if (selectedTopic === 'all' || cardTopics === selectedTopic) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Show all articles by default
    document.querySelector('.filter-btn[data-topic="all"]').click();
});