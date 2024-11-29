const Discord = require('discord.js');
const data = require('quick.db');

exports.run = (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kayıt-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)) 
if(!args[0]) return message.inlineReply(nn.setTitle('Bir hata oldu!').setDescription(`Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`)) 

data.set(`tag.${message.guild.id}`, args[0]+' ');
message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription(`Kayıt tag sistemini başarıyla \`${args[0]}\` olarak seçtiniz.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-tag'
};