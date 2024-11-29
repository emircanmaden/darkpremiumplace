const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, params) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    const matador = new Discord.MessageEmbed()
    .setAuthor('FBI Open the door !')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735`)
    return message.inlineReply(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fbı','fbi','fbi'],
  permLevel: 0
};

exports.help = {
  name: 'fbi',
  description: 'fbi.',
  usage: 'fbi'
};