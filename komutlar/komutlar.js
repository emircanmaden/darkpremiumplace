const db = require('quick.db')

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    try {
        await message.inlineReply(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
  
};
