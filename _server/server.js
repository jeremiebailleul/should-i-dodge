var express = require('express');
var app = express();
var cors = require('cors');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const BASEURL = "https://euw1.api.riotgames.com";
const APIKEY = "?api_key=RGAPI-888f80d9-5bf5-4589-a82c-847f5a9735c9";

var originsWhitelist = [
  'http://localhost:4200'      //this is my front-end url for development
  // 'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));

app.get('/lol/summoner/v3/summoners/by-name/*', function(req, res) {
    console.log(BASEURL + req.url + APIKEY);
  res.send(httpGet(BASEURL + req.url + APIKEY));
});

app.get('/lol/match/v3/matchlists/by-account/*', function(req, res) {
    console.log(BASEURL + req.url + APIKEY);
  res.send(httpGet(BASEURL + req.url + APIKEY));
});

app.get('/lol/match/v3/matches/*', function(req, res) {
  res.send(httpGet(BASEURL + req.url + APIKEY));
});


app.listen(3001);

console.log('Listening on port 3001...');

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
