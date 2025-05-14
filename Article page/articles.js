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