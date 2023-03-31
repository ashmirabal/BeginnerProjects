'use strict';

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const yelp = require('yelp-fusion');
const client = yelp.client('jyrtDzDmLWA4pPqr6BxpjWbG7b_eucBketaIvnfpiY8qihGyfocRQC9Ob-5IOde8xvFuuOToFgPShNWsrzKYHpW--Tp8QGF8uEJWykIJmHUFFjt7PGA8eM6B6lOOY3Yx');

const logger = require('morgan')
app.use(logger('dev'))
app.use(express.static('public'));

const baseURL = 'https://api.yelp.com/v3'


app.get('/', (req, res) =>{
  res.render('home.ejs')
})

app.get('/findResults', (req, res) =>{
  let route = 'businesses/search'
  let endpoint = `${baseURL}/${route}`
  let location = req.query.location

  client.search({
    // term: 'Four Barrel Coffee',
    location: `${location}`,
  }).then(response => {
    let businessData = response.jsonBody.businesses.slice(0,10)
    // console.log(response.jsonBody.businesses[0].name);
    console.log(businessData)
    res.render('searchresults.ejs', {businessData})

  }).catch(e => {
    console.log(e);
  });

  
})

app.listen(port, () => console.log(`Food Finder listening on port ${port}`))