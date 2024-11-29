const Discord = require("discord.js");
const db = require('quick.db')

exports.run = function(client, message, args) {
          if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("**Kimi Tokatlayacam Reis Etiketlede Vurayım Ağzının Ortasına **")
      .catch(console.error);

const Embedmatador = new Discord.MessageEmbed()

    .setColor("0x808080")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **"
    )
    .setImage("https://media1.tenor.com/images/2e6d884809b1632ac7f2fa178667a7ab/tenor.gif?itemid=15732301")
    .setFooter("Dark Place Bot", client.user.avatarURL);

message.inlineReply(Embedmatador);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at", "tokatat"],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Belirtilen kişiyi, Tokatlar!",
  usage: "tokat"
};
