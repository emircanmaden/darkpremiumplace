const Discord = require('discord.js');
const db = require('quick.db')

const client = new Discord.Client();

exports.run = (client, message) => {
            if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}

    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor("36393F")
    .setTimestamp()
     .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setDescription(' **İşte beni yapan şahsiyet** <@702463861034319974> ');
    message.inlineReply(ozelmesajkontrol)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım','yapımcı','yapımcılarım','yapımcılar',"myproducer"],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapımcımı Gosterir.',
  usage: 'yapımcım'
};