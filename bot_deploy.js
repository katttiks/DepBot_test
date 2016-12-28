var builder = require('botbuilder');
var restify = require('restify');
var greetings = require("./greetings.js");
// var dotenv = require('dotenv');

// dotenv.load()

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server


var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

  
// Create chat bot
console.log(process.env.MICROSOFT_APP_ID)
var connector = new builder.ChatConnector({
    appId: '83a1a072-7173-464f-987c-3fa2b8c2d029',//process.env.MICROSOFT_APP_ID'',
    appPassword: 'Tu1fLBTmxfL6c4qCrcsSbn6'
});

console.log(connector);

console.log(connector.appId)
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});



