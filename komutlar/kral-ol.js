const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')

exports.run = (client, message, params) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

if (!message.guild) { 

const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","----------------------------------------------------------");

return message.author.send(Embedmatador);

  }

if (message.channel.type !== "dm") {

const Embedmatador = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Artık Kral Oldun!!!")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif")
      .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`);

return message.inlineReply(Embedmatador);
  }
};
//matador
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kral-ol"],
  permLevel: 0
};

exports.help = {
  name: "kralol",
  description: "kralol",
  usage: "kralol"
};