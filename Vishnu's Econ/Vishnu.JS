const books = [
  {
    title: "Thinking, Fast and Slow",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Thinking_Fast.jpg",
    rating: 4.5,
    summary: "In Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think and make choices. One system is fast, intuitive, and emotional; the other is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities-and also the faults and biases-of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behaviour. The importance of properly framing risks, the effects of cognitive biases on how we view others, the dangers of prediction, the right ways to develop skills, the pros and cons of fear and optimism, the difference between our experience and memory of events, the real components of happiness-each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.",
    reflection: "Changed how I view decisions. Key takeaway: be aware of cognitive biases."
  },
  
];

function renderBooks() {
  const container = document.getElementById('books-container');
  container.innerHTML = '';

  books.forEach(book => {
    const stars = '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating);
    const bookHTML = `
      <div class="book-entry">
        <img src="${book.cover}" alt="${book.title} Cover" class="book-cover">
        <div class="book-details">
          <h3>${book.title}</h3>
          <div class="star-rating">${stars}</div>
          <p class="book-summary"><strong>Summary:</strong> ${book.summary}</p>
          <p class="book-reflection"><strong>My Reflections:</strong> ${book.reflection}</p>
        </div>
      </div>
    `;
    container.innerHTML += bookHTML;
  });
}

document.addEventListener('DOMContentLoaded', renderBooks);