import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import request from 'request';
import cheerio from 'cheerio';
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/scrape/:locationName', function (req, res) {
  let weather = {};
  let locationName = req.params.locationName;
  weather.locationName = locationName;
  let cityName = locationName.split(' ')[0];
  let countryName = locationName.split(' ')[1];

  const url = 'https://www.timeanddate.com/weather/'+countryName+'/'+cityName;
  request(url, function (error, response, html) {
    if (!error) {
      const $ = cheerio.load(html);
      let imageSrc = $('#cur-weather').attr('src');
      weather.imageSrc = imageSrc;

      $('#qlook').filter(function () {
        let temperature = $('div.h2').text();
        let discription = $('p').first().text();
        let wind = $('br.clear').next().text().split('Wind')[1];
        weather.temperature = temperature;
        weather.discription = discription;
        weather.wind = wind;
      });

      $('#qfacts').filter(function () {
        $('p').each(function (index, element) {
          if (index === 7) {
            let humidity = $(this).text();
            weather.humidity = humidity;
          }
        });
      });
      if(weather.imageSrc){
        res.json(weather);
      }
      else{
        res.json('location not found');
      }
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
