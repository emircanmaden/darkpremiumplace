const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Hata!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}erkek-rol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)) 
if(!args[0]) return message.inlineReply(nn.setTitle('Hata!').setColor('RED').setDescription(`Bir rol etiketlemeyi unuttunuz.`)) 
let role = message.mentions.roles.first();
if(!role) return message.inlineReply(nn.setTitle('Hata!').setColor('RED').setDescription(`Bir rol etiketlemeyi unuttunuz.`)) 
data.set(`erkek.${message.guild.id}`, role.id);
message.inlineReply(nn.setTitle(`Başarılı`).setDescription(`Kayıt için kullanılacak: ${role} rol olarak seçtiniz.`)) 

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'erkek-role'
};