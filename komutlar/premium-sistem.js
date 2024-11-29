const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Premium Sistem**

Merhaba normal Dark Place Bottan 2 kat daha hızlı bota [göz atın.](https://discord.gg/PAyYzTpKer) Uptime canavarı Dark Premim Place sayesinde kesintisiz ve 2 kat hızlı bir deneyim. 
**
》Daha Hızlı.

》Daha Fazla Komut.

》Özel Destek.

》Sunucu İçi Özel Rol Ve Kanal İzni.

》Fiyat: 10₺ Aylık**

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['premiumsistem',"premium","gold"],
  permLevel: 0
}

exports.help = {
  name: 'premium-sistem'
};