const express = require('express')
const app = express('')
const port = process.env.PORT || 3000;
const logger = require('morgan')
const fetch = require('node-fetch')

app.use(logger('dev'));
app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.redirect('/home')
})

app.get('/home', (req, res) => {
    const initDrink = [{
    strInstructions: `Mix lemonade and water according to instructions on back of can. If the instructions say 
    to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). 
    Mix well. Pour into glass of crushed ice. Excellent!`,
    strDrink: 'Shark Attack',
    strDrinkThumb: `https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg`,
    strIngredient1: 'Vodka',
    strIngredient2: 'Vodka',
    strIngredient3: 'Vodka',
    strIngredient4: 'Vodka',
    strMeasure1: '1st can',
    strMeasure2: '2nd can',
    strMeasure3: '3rd can',
    strMeasure4: '4th can',
    imageSrc: "https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
  }]
  res.render('home.ejs', {drinkData: initDrink })
})


app.get('/randomDrink', (req, res) => {
let endpoint = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'


fetch(endpoint)
.then(response => {
  if(response.ok){
    return response.json()
  }
  throw Error('BROKEN!!')
})
.then(data =>{
  let drinkData = data.drinks

  console.log(drinkData)
  // console.log(drinkData[0])
  res.render('home.ejs', {drinkData: drinkData})
})
.catch(error => {
  console.log('error', error)
  res.send('There is an error')
})


})

app.listen(port, () => console.log(`Cocktail server listening on port ${port}`))