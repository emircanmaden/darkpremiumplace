const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const nn = new Discord.MessageEmbed().setThumbnail();
if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Hata!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}erkek-sil\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)) 

data.delete(`erkek.${message.guild.id}`);
message.inlineReply(nn.setTitle(`Başarılı!`).setDescription(`Erkek rolü silindi.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'erkek-sil'
};