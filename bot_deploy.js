var builder = require('botbuilder');
var restify = require('restify');
var greetings = require("./greetings.js");
var dotenv = require('dotenv');


dotenv.load()

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD 
});
var bot = new builder.UniversalBot(connector);
bot.dialog('/', function(session) {
    session.send('Hello, bot!');
});

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
server.post('/api/messages', connector.listen());