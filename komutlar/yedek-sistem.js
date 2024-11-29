const Discord = require('discord.js');
const data = require('quick.db');
exports.run = async (client, message, args) => {
message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Yedek Menüsüne Hoşgeldin**

**        [ Yedek Sistem ]        **
> \`${client.ayarlar.prefix}yedek oluştur\`
> \`${client.ayarlar.prefix}yedek yükle\`
> \`${client.ayarlar.prefix}yedek bilgi\`


`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yedeksistem'],
  permLevel: 0
}

exports.help = {
  name: 'yedek-sistem'
};