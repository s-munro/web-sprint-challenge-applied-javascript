// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles

import axios from 'axios';
axios.get('https://lambda-times-api.herokuapp.com/articles').then(res => {
  // console.log(res.data.articles);

  // SET ARRAY
  const bootstrap = res.data.articles.bootstrap;
  const javascript = res.data.articles.javascript;
  const jquery = res.data.articles.jquery;
  const node = res.data.articles.node;
  const technology = res.data.articles.technology;
  const topicArray = [javascript, bootstrap, technology, jquery, node]
  console.log(topicArray)

  // MEAT AND POTATOES
  topicArray.forEach(topics => {
    topics.forEach(card => {
      makeCard(card)
    })
  })

}).catch(err => {
  console.log(err);
})


const cardsContainer = document.querySelector('.cards-container')

function makeCard(data) {

  // CREATE AND ADD CLASSES
  const card = document.createElement('div')
  card.classList.add('card');
  const headline = document.createElement('div')
  headline.classList.add('headline')
  const author = document.createElement('div')
  author.classList.add('author')
  const authorImgContainer = document.createElement('div')
  authorImgContainer.classList.add('img-container')
  const authorImg = document.createElement('img')
  const byName = document.createElement('span')

  // TEXT CONTENT
  headline.textContent = `${data.headline}`
  authorImg.src = `${data.authorPhoto}`
  byName.textContent = `${data.authorName}`

  // APPEND THEM
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(authorImgContainer)
  authorImgContainer.appendChild(authorImg)
  author.appendChild(byName)

  // APPEND TO DOM
  cardsContainer.appendChild(card)

  // EVENT LISTENER
  headline.addEventListener('click', (e) => {
    console.log(headline.textContent);
  })


}
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.