const express = require('express')
const app = express()
const port = 3000

var path = require('path')
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'build')));

var WeatherDataController = require('./REST_API/weather');

app.get('/data/2.5/weather', WeatherDataController.getData);
//app.get('/data/2.5/weather', (req, res) => {
//  res.json({"coord":{"lon":123.262,"lat":44.5646},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":285.23,"feels_like":284.95,"temp_min":285.23,"temp_max":285.23,"pressure":1014,"humidity":94,"sea_level":1014,"grnd_level":997},"visibility":10000,"wind":{"speed":3.41,"deg":190,"gust":9.72},"clouds":{"all":18},"dt":1664661306,"sys":{"country":"CN","sunrise":1664660711,"sunset":1664702853},"timezone":28800,"id":2036338,"name":"Kaitong","cod":200})
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})