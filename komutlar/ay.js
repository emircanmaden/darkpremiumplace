const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, params) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    const matador = new Discord.MessageEmbed()
    .setAuthor('Buyur Ay')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/756534591652626542/762731046634258453/ay.gif`)
    return message.inlineReply(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ay','Ay','AY'],
  permLevel: 0
};

exports.help = {
  name: 'ay',
  description: 'ay.',
  usage: 'ay'
};