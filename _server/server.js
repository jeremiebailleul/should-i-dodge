var express = require('express');
var app = express();

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const BASEURL = "https://euw1.api.riotgames.com";
const APIKEY = "?api_key=RGAPI-1254c47e-138b-4b22-90c8-25f752c342f9";

app.get('/lol/summoner/v3/summoners/by-name/*', function(req, res) {
    console.log(BASEURL + req.url + APIKEY);
  res.header("Access-Control-Allow-Origin","*");
  res.send(httpGet(BASEURL + req.url + APIKEY));
});

app.get('/lol/match/v3/matchlists/by-account/*', function(req, res) {
    console.log(BASEURL + req.url + APIKEY);
  res.header("Access-Control-Allow-Origin","*");
  res.send(httpGet(BASEURL + req.url + APIKEY));
});

app.get('/lol/match/v3/matches/*', function(req, res) {
  res.header("Access-Control-Allow-Origin","*");
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
