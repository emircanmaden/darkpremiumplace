const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')


exports.run = (client, message, params) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.inlineReply('Şuanda Bakım Modu Açıktır.')}
}
    const codeworld = new Discord.MessageEmbed()
    .setAuthor('Buyur Dünya')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.inlineReply(codeworld);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dünya','Dünya','DÜNYA'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dünya.',
  usage: 'dünya'
};