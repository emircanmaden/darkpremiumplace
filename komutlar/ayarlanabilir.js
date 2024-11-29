const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Ayarlanabilir Komutlar**
> \`${client.ayarlar.prefix}yapay-zeka aç/kapat #kanal\`
> \`${client.ayarlar.prefix}saas [Aç/Kapat]\`
> \`${client.ayarlar.prefix}öneri-kanal #kanal\`
> \`${client.ayarlar.prefix}denetim-aç/kapat\`

Tabiki bu kadar az ayarlabilir komutlarımız değil diğer menülerde farklı başlıklar altında :)
Örn: Kısıtlamalar Menüsü

Ayarlanan sistemleri görmek için \`!ayarlar\` yazabilirsiniz.

`)

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ayarlanabilir-sistem'],
  permLevel: 0
}

exports.help = {
  name: 'ayarlanabilirsistem'
};