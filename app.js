const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    
    if(msg.text === "hey" || msg.text === "Hey" || msg.text === "Hi"  || msg.text === "hi")
        bot.sendMessage(chatId, "fuck off");
    else if( msg.text === "nina" ||  msg.text === "Nina")
        bot.sendMessage(chatId, "Yeah... no thanks... She's annoying.");
    else if( msg.text === "ari" ||  msg.text === "Ari")
        bot.sendMessage(chatId, "Ugh, not her again...");
    else if(msg.text === "mom" || msg.text === "Mom")
        bot.sendMessage(chatId, "Did you mean Super-Mom?");
    else if(msg.text === "dad" || msg.text === "Dad")
        bot.sendMessage(chatId, "Damn, look at this guy's muscles..");
    
    else{
        var date = new Date();
        var current_hour = date.getHours();
        bot.sendMessage(chatId, "You sent this message at: " + current_hour);
    }
  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, "You said: " + msg.text);

});