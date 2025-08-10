const books = [
  {
    title: "Thinking, Fast and Slow",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Thinking_Fast.jpg",
    rating: 4.5,
    summary: "In Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think and make choices. One system is fast, intuitive, and emotional; the other is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities-and also the faults and biases-of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behaviour. The importance of properly framing risks, the effects of cognitive biases on how we view others, the dangers of prediction, the right ways to develop skills, the pros and cons of fear and optimism, the difference between our experience and memory of events, the real components of happiness-each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.",
    reflection: "Daniel Kahneman's exploration into two modes of thinking - System 1 (intuitive responses) and System 2 (deliberate reasoning) - offers a compelling framework for understanding why and where people often make decisions that deviate from economic models of self-interest. One of the book's most impactful contributions to behavioral economics lies in its development and explanation of prospect theory, which challenges classical utility theory by using psychologically realistic models of decision making under risk, pressure and time constraints. This has profound implications, helping explain real world behaviours such as risk averse investing, the disposition effect and various insurance related decisions. By exposing flaws in homo-economicus, Thinking, Fast and Slow helps reshape economic theory and offers an alternative in psychology."
  },
  {
    title: "Enough: True Measures of Money, Business, and Life",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Enough.jpg",
    rating: 5,
    summary: "For a critical element of American society, including many of its wealthiest and most powerful, there seems to be no limit today on what 'enough' entails. The excesses are most starkly visible in the continuing crisis in banking and investment, and even in the two enormous government-sponsored (but publicly owned) mortgage lenders, to say nothing of the billion-dollar-plus annual paychecks that top hedge-fund managers draw down and the excessive compensation paid to CEOs, regardless of performance. Throughout his legendary career, John Bogle, founder of the Vanguard mutual fund group and creator of the first index mutual fund, has helped investors build wealth the right way and led a tireless campaign to restore common sense to the investment world. Along the way, he's seen how destructive an obsession with financial success can be. Now, with Enough, he puts this dilemma in perspective. Bogle offers his unparalleled insights on money, on the values we should emulate in our business and professional callings, and on what we should consider as the true treasures in our lives. By explaining what 'enough' truly is, he demonstrates how close everyone can be to having it.",
    reflection: "The book offers a sobering critique of modern capitalism through questioning the need for a relentless pursuit of more - more money, more performance, more growth - often at the expense of ethics, purpose, and long term values. The book is grounded in the idea that capitalism without character is unsustainable - this is seen not through complicated financial models but through personal reflections of Bogle's challenges to the short terminsm that dominates Wall Street. He emphasises time and time again the disconnect between investment and speculation which I believe to be extremely relevant in todays economy, where financial markets often reward risk-taking and speculative behaviour over patience and stewardship. However Bogle's critique extends well beyond that of financial markets, it goes broader into economic life, urging a rethink of what truly constitutes value - both for you and me, but also institutions and collectives. "
},
{
    title: "The Black Swan: The Impact of the Highly Improbable",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Black_Swan.jpg",
    rating: 4.6,
    summary: "A black swan is a highly unusual event that has three main characteristics: it is unpredictable; it has a large impact; and, after the fact, we construct an explanation that makes it appear less random and more predictable than it was.For Nassim Nicholas Taleb, black swans underpin practically everything about our world, from the racial divide to the financial crisis. Why do we wait until black swans appear before acknowledging their existence? According to Taleb, part of the answer is that humans are predisposed to learn specifics when they should be focusing on generalities. We focus on what we already know and repeatedly fail to examine what we don't know. As a result, we are unable to adequately estimate opportunities, are too prone to the temptation to simplify, narrate, and categorize, and are not open enough to rewa For years, Taleb has investigated how we deceive ourselves into believing we know more than we do. We limit our thinking to the irrelevant and insignificant, while major events continue to surprise and affect our world.In this revelatory book, Taleb will change the way you look at the world, and this second edition includes a new philosophical and empirical study, On Robustness and Fragility, a new philosophical and empirical essay on how we fool ourselves into thinking we know more than we actually do.",
    reflection: "Nassim Taleb explores how rare, unpredictable events, called Black Swans, can shape our world far more than we realize. Through blending economics, philosophy and history, he shows how we consistently understimate uncertainty and overstimate our ability to predict the future. It is a though-provoking reminder to alwyas expect the unexpected but also to realise not all our prediction come true."
},
{
    title: "Economic Facts and Fallacies",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Economic_Facts_and_Fallacies.jpg",
    rating: 3,
    summary: "Economic Facts and Fallacies exposes some of the most popular fallacies about economic issues-and does so in a lively manner and without requiring any prior knowledge of economics by the reader. These include many beliefs widely disseminated in the media and by politicians, such as mistaken ideas about urban problems, income differences, male-female economic differences, as well as economics fallacies about academia, about race, and about Third World countries. One of the themes of Economic Facts and Fallacies is that fallacies are not simply crazy ideas but in fact have a certain plausibility that gives them their staying power-and makes careful examination of their flaws both necessary and important, as well as sometimes humorous. ",
    reflection: "Thomas Sowell debunks some of the biggest myths shaping public debates. He breaks down complex social, economical and political topics like housing, income gaps and discrimintation into straightforward, easy to understand examples. By the end you feel better equipped to spot bad arguements and see the bigger economic picture."
},
{
    title: "Options: A Monte Carlo Approach",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Option_Monte_Carlo.jpg",
    rating: 4,
    summary: "This paper develops a Monte Carlo simulation method for solving option valuation problems. The method simulates the process generating the returns on the underlying asset and invokes the risk neutrality assumption to derive the value of the option. Techniques for improving the efficiency of the method are introduced. Some numerical examples are given to illustrate the procedure and additional applications are suggested.",
},
{
    title: "The Pricing of Options and Corporate Liabilities",
    cover: "/SCD_Economics_Website/Vishnu's%20Econ/Book%20Images/Black_Scholes.jpg",
    rating: 4,
    summary: "If options are correctly priced in the market, it should not be possible to make sure profits by creating portfolios of long and short positions in options and their underlying stocks. Using this principle, a theoretical valuation formula for options is derived. Since almost all corporate liabilities can be viewed as combinations of options, the formula and the analysis that led to it are also applicable to corporate liabilities such as common stock, corporate bonds, and warrants. In particular, the formula can be used to derive the discount that should be applied to a corporate bond because of the possibility of default.",
},
{
    title: "Forecasting in Nonstationary Environments: What Works and What Doesn’t in Reduced-Form and Structural Models",
    cover: "/SCD_Economics_Website/Vishnu's%20Econ/Book%20Images/Forecasting.jpg",
    rating: 3,
    summary: " This review provides an overview of forecasting methods that can help researchers forecast in the presence of non-stationarities caused by instabilities. The emphasis of the review is both theoretical and applied, and provides several examples of interest to economists. We show that modeling instabilities can help, but it depends on how they are modeled. We also show how to robustify a model against instabilities",
},
{
    title: "Economic Theory and Forecasting: Lessons from the Literature",
    cover: "/SCD_Economics_Website/Vishnu's Econ/Book Images/Economic_Theory.jpg",
    rating: 5,
    summary: "Does economic theory help in forecasting key macroeconomic variables? This article aims to provide some insight into the question by drawing lessons from the literature. The definition of ‘economic theory’ includes a broad range of examples, such as accounting identities, disaggregation and spatial restrictions when forecasting aggregate variables, cointegration and forecasting with dynamic stochastic general equilibrium (DSGE) models. We group the lessons into three themes. For the first, we discuss the importance of using the correct econometric tools when answering the question. For the second, we present examples of theory‐based forecasting that have not proven useful, such as theory‐driven variable selection and some popular DSGE models. For the third set of lessons, we discuss types of theoretical restrictions that have shown some usefulness in forecasting, such as accounting identities, disaggregation and spatial restrictions, and cointegrating relationships. We conclude by suggesting that economic theory might help in overcoming the widespread instability that affects the forecasting performance of econometric models by guiding the search for stable relationships that could be usefully exploited for forecasting.",
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