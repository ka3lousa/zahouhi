const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523808032921092116")
setInterval(function() {
channel.send(`hi  i am the best in this houma i am boyka kabir enta kabir haywan kalb`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
