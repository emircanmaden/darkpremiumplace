const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.inlineReply(new Discord.MessageEmbed()
.setTitle('Dark Place Komut Mesaj Sistemi')
.setDescription(`\`${client.ayarlar.prefix}komut ekle\`
**Oluşturmak istediğin komut ismini ve cevabı girmen gerekir**

\`${client.ayarlar.prefix}komut tablo\`
**Oluşturulan komutları buradan görebilirsiniz**

\`${client.ayarlar.prefix}komut sil\`
**Komut ismini girerek istediğiniz komutunuzu silebilirsiniz**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'komut-mesaj-sistem'
};