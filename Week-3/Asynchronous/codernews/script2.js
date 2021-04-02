const url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=a64e8d04193e44bc876698279dc8d684";

async function getNews() {
  const response = await fetch(url);
  const jsonData = await response.json();

  console.log({ jsonData });
}

getNews();
