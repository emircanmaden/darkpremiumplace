const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const nn = new Discord.MessageEmbed().setThumbnail();
if(!message.member.permissions.has('ADMINISTRATOR')) return message.inlineReply(nn.setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}kadın-sil\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

data.delete(`kadın.${message.guild.id}`);
message.inlineReply(nn.setTitle(`İşte bu kadar!`).setDescription(`Ayarlanmış kadın rolü başarıyla silindi.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kadın-sil'
};