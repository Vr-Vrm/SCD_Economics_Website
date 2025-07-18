const books = [
  {
    title: "Thinking, Fast and Slow",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Thinking_Fast.jpg",
    rating: 4.5,
    summary: "In Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think and make choices. One system is fast, intuitive, and emotional; the other is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities-and also the faults and biases-of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behaviour. The importance of properly framing risks, the effects of cognitive biases on how we view others, the dangers of prediction, the right ways to develop skills, the pros and cons of fear and optimism, the difference between our experience and memory of events, the real components of happiness-each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.",
    reflection: "Changed how I view decisions. Key takeaway: be aware of cognitive biases."
  },
  {
    title: "Enough: True Measures of Money, Business, and Life",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Enough.jpg",
    rating: 4.7,
    summary: "Written by investing legend John C. Bogle, 'Enough.' is a heartfelt plea for moderation in business and life. Bogle challenges the culture of 'more' by asking what constitutes 'enough' in terms of money, success, and happiness. With reflections from his decades-long career in finance, Bogle urges readers to focus on integrity, stewardship, and long-term values over short-term gain.",
    reflection: "Reframed my perspective on success and wealth. Key takeaway: value integrity over endless accumulation."
},
{
    title: "The Black Swan: The Impact of the Highly Improbable",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Black_Swan.jpg",
    rating: 4.6,
    summary: "In 'The Black Swan,' Nassim Nicholas Taleb explores the profound impact of rare and unpredictable events — Black Swans — that lie outside regular expectations. Taleb discusses how our inability to predict these events stems from biases and flawed models, urging a shift towards robustness over prediction. This book reshapes understanding of risk, uncertainty, and randomness.",
    reflection: "Altered my understanding of uncertainty. Key takeaway: plan for the improbable, not just the expected."
},
{
    title: "Economic Facts and Fallacies",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Economic_Facts_and_Fallacies.jpg",
    rating: 4.4,
    summary: "In 'Economic Facts and Fallacies,' Thomas Sowell debunks common economic misconceptions surrounding housing, education, gender, race, and income inequality. Sowell employs empirical evidence to challenge popular beliefs, illustrating how intuitive arguments often lead to flawed conclusions and poor policy decisions.",
    reflection: "Sharpened my skepticism toward popular economic narratives. Key takeaway: evidence trumps intuition."
},
{
    title: "Options: A Monte Carlo Approach",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Option_Monte_Carlo.jpg",
    rating: 4.5,
    summary: "In this seminal paper, Phelim P. Boyle introduces the Monte Carlo simulation approach for valuing options. By modeling the random behavior of underlying assets and applying risk-neutral valuation, Boyle demonstrates how Monte Carlo methods can flexibly handle a variety of option types beyond the reach of analytical solutions.",
    reflection: "Fundamentally changed my view of options modeling. Key takeaway: simulation as a practical tool for complex derivatives."
},
{
    title: "The Pricing of Options and Corporate Liabilities",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Black_Scholes.jpg",
    rating: 5.0,
    summary: "Fischer Black and Myron Scholes present a groundbreaking method for pricing European options, leading to the famous Black-Scholes model. By establishing a dynamic hedging approach and deriving a partial differential equation for option pricing, this paper laid the foundation for modern quantitative finance and options theory.",
    reflection: "A milestone in financial theory. Key takeaway: hedging replication as the backbone of derivative pricing."
},
{
    title: "Forecasting in Nonstationary Environments: What Works and What Doesn’t in Reduced-Form and Structural Models",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Forecasting.jpg",
    rating: 4.3,
    summary: "Raffaella Giacomini examines the performance of reduced-form versus structural models in nonstationary environments. The paper assesses which methodologies perform better under changing economic conditions, highlighting that forecast accuracy depends heavily on the nature of structural breaks and model design.",
    reflection: "Deepened my understanding of model selection under uncertainty. Key takeaway: adapt model strategy to structural realities."
},
{
    title: "Economic Theory and Forecasting: Lessons from the Literature",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Economic_Theory.jpg",
    rating: 4.2,
    summary: "In this comprehensive review, Raffaella Giacomini synthesizes the literature connecting economic theory with forecasting practices. The paper addresses how incorporating theory-based restrictions can affect forecast performance, drawing lessons on when theoretical foundations improve or hinder predictive accuracy.",
    reflection: "Clarified the tension between theory and empirical performance. Key takeaway: theory is a guide, not a guarantee."
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