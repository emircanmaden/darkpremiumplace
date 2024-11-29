const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Rol Sistem Menüsüne Hoşgeldin!
__Rol ile işlemleri yapabileceğiniz komutlar.__**

> \`${client.ayarlar.prefix}rol-al\`
> \`${client.ayarlar.prefix}rol-ver\`
> \`${client.ayarlar.prefix}rol-bilgi\`
> \`${client.ayarlar.prefix}rol-rengi\`
> \`${client.ayarlar.prefix}role\`

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolsistem'],
  permLevel: 0
}

exports.help = {
  name: 'rol-sistem'
};