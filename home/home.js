const news = async () => {
    const apikey = 'd846641e3a8f6dcc4750fe8432f5d801';
    const url = 'https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=ph&max=8&apikey=' + apikey;

    try {
        const response = await fetch(url);
        const result = await response.json();

        const articles = result.articles.map(article => ({
            image: article.image,
            title: article.title,
            description: article.description,
            source: article.source.name,
            url: article.url
        }));

        console.log(articles);

        // Call function to display news
        displayNews(articles);
    } catch (error) {
        console.error(error);
        alert("Error fetching the news.");
    }
};

// Function to display multiple news articles
const displayNews = (articles) => {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear previous articles

    for (let i = 0; i < Math.min(8, articles.length); i++) {
        const article = articles[i];

        // Create a new card div for each article
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('news-card');

        // Create the HTML structure for the card
        cardDiv.innerHTML = `
            <div class="card-image">
                <img src="${article.image}" class="cover-image">
            </div>
            <div class="card-details">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <p><a href="${article.url}" target="_blank" class="source-link">${article.source}</a></p>
            </div>
        `;

        // Append the card div to the container
        container.appendChild(cardDiv);
    }

    if (articles.length === 0) {
        alert("No news articles available.");
    }
};

window.onload = () => {
    news();
};
