const Discord = require('discord.js');
const data = require('quick.db');

exports.run = (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kayıt-tag-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)) 

data.delete(`tag.${message.guild.id}`);
message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription(`Kayıt tag başarıyla kapatıldı.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-tag-kapat'
};