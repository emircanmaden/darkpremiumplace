const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Kanal Sistem Menüsüne Hoşgeldin!
__Yazı Kanallarına yapabileceğiniz komutlar.__**

> \`${client.ayarlar.prefix}sohbet-aç\`
> \`${client.ayarlar.prefix}sohbet-kapat\`

> \`${client.ayarlar.prefix}görünürlük-aç\`
> \`${client.ayarlar.prefix}görünürlük-kapat\`

> \`${client.ayarlar.prefix}tepki-aç\`
> \`${client.ayarlar.prefix}tepki-kapat\`

> \`${client.ayarlar.prefix}dosya-aç\`
> \`${client.ayarlar.prefix}dosya-kapat\`

> \`${client.ayarlar.prefix}geçmiş-mesaj-aç\`
> \`${client.ayarlar.prefix}geçmiş-mesaj-kapat\`

> \`${client.ayarlar.prefix}başka-sunucu-emoji-aç\`
> \`${client.ayarlar.prefix}başka-sunucu-emoji-kapat\`
`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalsistem'],
  permLevel: 0
}

exports.help = {
  name: 'kanal-sistem'
};
