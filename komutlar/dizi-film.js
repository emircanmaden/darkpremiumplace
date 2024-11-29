const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Dizi Film Sistem
__İstetiğiniz dizi/filme 1 komutla ulaşabilirsiniz.__**

> \`${client.ayarlar.prefix}dizi-ara\`
> \`${client.ayarlar.prefix}film-ara\`
> \`${client.ayarlar.prefix}trend-filmler\`
> \`${client.ayarlar.prefix}rastgele-dizi\`
> \`${client.ayarlar.prefix}rastgele-film\`

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dizifilm'],
  permLevel: 0
}

exports.help = {
  name: 'dizi-film'
};