const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

// count the number of articles in real data
const newsCounter = document.getElementById("news-count");

// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

/**
 * end point 1: https://newsapi.org/v2/everything?q=bitcoin
 * end point 2:
 */
const API_KEY = "a64e8d04193e44bc876698279dc8d684";
let endpoint = "top-headlines";
let firstPartOfUrl = `https://newsapi.org/v2/${endpoint}?`;
let lastPartOfUrl = `apiKey=${API_KEY}`;

let urlOptions = {
  country: "us",
  category: "",
  page: 1,
  q: "",
};
let newsList = [];

const getURL = (urlOptions) => {
  let url = Object.keys(urlOptions).reduce((url, option) => {
    if (urlOptions[option]) {
      url += `${option}=${urlOptions[option]}&`;
    }
    return url;
  }, firstPartOfUrl);
  url += lastPartOfUrl;
  return url;
};

const getArticles = async () => {
  let url = getURL(urlOptions);
  try {
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    console.log(newsList);
    renderArticles(newsList);
  } catch (error) {
    console.log(error);
  }
};

const renderArticles = (newsList) => {
  const newsListHTML = newsList.map((news) => {
    return `<li class="media">
    <div id="singleNews" class="media-body">
      <h4>${news.title}</h4>
      <p>
        ${news.description}
      </p>
      <span class="badge badge-info">${news.source.name}</span>
      <span class=""></span>
      <div>
        <img
          class="view-more-icon"
          src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=w32-rw"
          alt="view-more-icon"
        />
        <a id="urlToNews" href="${news.url}"
          >View more detail</a
        >
      </div>
    </div>
    <img
      id="newsImage"
      src="${news.urlToImage}"
      alt="newsImage"
    />
  </li>
`;
  });

  document.getElementById("news-list").innerHTML = newsListHTML;
};

getArticles();

function handleSearchClick() {
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let query = searchInput.value;
    // console.log(searchValue);
    document.getElementsByTagName("footer")[0].innerHTML = query;
  });
}

function handleClickSideMenu(category) {}

function handleSourceClick(something) {}
