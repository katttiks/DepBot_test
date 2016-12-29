var builder = require('botbuilder');
var restify = require('restify');
var greetings = require("./greetings.js");
var dotenv = require('dotenv');

dotenv.load()

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server





// Create chat bot

var connector = new builder.ChatConnector({
     appId: process.env.MICROSOFT_APP_ID,
     appPassword: process.env.MICROSOFT_APP_PASSWORD
});

console.log(connector)
var bot = new builder.UniversalBot(connector);

bot.dialog('/', function(session) {
    session.send('Hello, bot!');
});

//this is a comment
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
server.post('/api/messages', connector.listen());