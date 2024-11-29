const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed()
.setTitle('Dark Place Kısıt Sistemi')
.addField('Küfür Kısıtlamak', `\`\`\`${client.ayarlar.prefix}küfür kısıt & ${client.ayarlar.prefix}küfür kapat\`\`\``)
.addField('Reklam Kısıtlamak', `\`\`\`${client.ayarlar.prefix}reklam kısıt & ${client.ayarlar.prefix}reklam kapat\`\`\``)
.addField('Büyük Harf Kısıtlamak', `\`\`\`${client.ayarlar.prefix}caps kısıt & ${client.ayarlar.prefix}caps kapat\`\`\``)
.addField('Napim Kısıtlamak', `\`\`\`${client.ayarlar.prefix}napim kısıt & ${client.ayarlar.prefix}napim kapat\`\`\``)
.setDescription("Ayarlanan sistemleri görmek için `!ayarlar` yazabilirsiniz.")
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};