// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        response.data.articles.javascript.forEach(article => {
            cardCont.appendChild(cardMaker(article.headline, article.authorPhoto, article.authorName));
        });
        response.data.articles.bootstrap.forEach(article => {
            cardCont.appendChild(cardMaker(article.headline, article.authorPhoto, article.authorName));
        });
        response.data.articles.jquery.forEach(article => {
            cardCont.appendChild(cardMaker(article.headline, article.authorPhoto, article.authorName));
        });
        response.data.articles.node.forEach(article => {
            cardCont.appendChild(cardMaker(article.headline, article.authorPhoto, article.authorName));
        });
        response.data.articles.technology.forEach(article => {
            cardCont.appendChild(cardMaker(article.headline, article.authorPhoto, article.authorName));
        });
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

function cardMaker(headline, imgURL, authorName) {
    let card = document.createElement('div');
    let cHeadline = document.createElement('div');
    let cAuthor = document.createElement('div');
    let cImgCont = document.createElement('div');
    let cImg = document.createElement('img');
    let cAuthorName = document.createElement('span');

    card.classList.add('card');
    cHeadline.classList.add('headline');
    cAuthor.classList.add('author');
    cImgCont.classList.add('img-container');

    card.appendChild(cHeadline);
    card.appendChild(cAuthor);
    cAuthor.appendChild(cImgCont);
    cAuthor.appendChild(cAuthorName);
    cImgCont.appendChild(cImg);

    cHeadline.innerHTML = headline;
    cAuthorName.innerHTML = authorName;

    cImg.setAttribute('src', imgURL);

    return card;
}

let cardCont = document.querySelector('.cards-container');
