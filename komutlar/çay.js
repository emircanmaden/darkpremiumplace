const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + ' Herkese Çay Aldı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://64.media.tumblr.com/c176e439c5f4d1aafba818b84e7bcb6c/tumblr_oy35u1NCXI1s2a2v9o3_250.gifv`)
    return message.inlineReply(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hbç"],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Herkese Çay Verir',
  usage: 'herkesebendençay'
};