const news = async () => {
    apikey = 'd846641e3a8f6dcc4750fe8432f5d801';
    const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=ph&max=10&apikey=' + apikey;

    try {
        const response = await fetch(url);
        const result = await response.json();  // Parse the data into JSON format

        const articles = result.articles.map(article => ({
            title: article.title,
            description: article.description,
            source: article.source.name
        }));

        console.log(articles);

        // Call function to display news
        displayNews(articles);
    } catch (error) {
        console.error(error);
        alert("Error fetching the news.");
    }
};

// Function to display the first news article's title and description in the <p> tags
const displayNews = (articles) => {
    if (articles.length > 0) {
        const firstArticle = articles[0];

        const titleElement = document.getElementById('title');
        const descElement = document.getElementById('desc');
        const sourceElement = document.getElementById('source');

        titleElement.innerText = firstArticle.title;
        descElement.innerText = firstArticle.description;
        sourceElement.innerText = firstArticle.source.name
    } else {
        alert("No news articles available.");
    }
};

window.onload = () => {
    news();
};