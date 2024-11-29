const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const nn = new Discord.MessageEmbed().setThumbnail();
if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kayıtsız-sil\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

data.delete(`kayıtsız.${message.guild.id}`);
message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription(`Ayarlanmış kayıtsız rolü başarıyla silindi.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıtsız-sil'
};