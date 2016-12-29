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

var connector = new builder.ChatConnector();

var bot = new builder.UniversalBot(connector);

bot.dialog('/', function(session) {
    session.send('Hello, bot!');
});


var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
server.post('/api/messages', connector.listen());