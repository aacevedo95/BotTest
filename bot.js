const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var token ='190927910:AAHOqOyug82MVeRQlvYYVgxRNjtaVYnQnns';

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
    var list = [];
    console.log(msg);
    let split = msg.text.split(" ");
    let param = split[1];
    
    
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
    else if(msg.text === "adria" || msg.text === "Adria")
        bot.sendMessage(chatId, "I hear she's a great actress.. and singer too!");
    
    
    if(msg.text.split(" ") === "/addactivity"){
        bot.sendMessage(chatId, param);    
        list.push(param);
    }
    else if(msg.text === "/seelist")
            list.pop(0);
    
    
    else{
        var date = new Date();
        var current_hour = date.getHours();
        var format_hour = current_hour - 12;
        var currrent_mins = date.getMinutes();
        bot.sendMessage(chatId, "You sent: '" +msg.text + "' at: " + format_hour +":"+currrent_mins);
    }
    
    
});