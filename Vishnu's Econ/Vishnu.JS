const books = [
  {
    title: "Thinking, Fast and Slow",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Thinking_Fast_and_Slow.jpg",
    rating: 4,
    summary: "Kahneman explores two systems of thinking shaping our judgments.",
    reflection: "Changed how I view decisions. Key takeaway: be aware of cognitive biases."
  },
  {
    title: "Freakonomics",
    cover: "/SCD_Economics_Website/assets/freakonomics.jpg",
    rating: 5,
    summary: "A rogue economist explores hidden sides of everything.",
    reflection: "Enjoyed the unconventional questions. Very readable and thought-provoking."
  }
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